import React from "react";
import { Text, View, Keyboard, StatusBar} from "react-native";
import {
  Control,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";
import {Ionicons} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";

// constants
import {COLORS, FONTS, SIZES} from "@constants/theme";
import globalStyles from "@constants/styles";

// types
import {CountyDistrictStackParamList, IFormData, StackProps} from "types";

// components
import IconButton from "./IconButton";
import CustomInput from "./CustomInput";

// redux
import useTheme from "@features/theme/useTheme";

type SearchProps = {
  search: string;
};

interface ISearchScreenHeaderProps {
  control: Control<SearchProps, any>;
  handleSubmit?: UseFormHandleSubmit<SearchProps>;
  reset: UseFormReset<SearchProps>;
  navigation: StackProps<CountyDistrictStackParamList, "Search">["navigation"];
}

const SearchScreenHeader = ({
  navigation,
  control,
  handleSubmit,
  reset,
}: ISearchScreenHeaderProps) => {
  const {colors} = useTheme();
  const styles = globalStyles({colors});
  const [pressed, setPressed] = React.useState<boolean>(false);
  return (
    <View style={styles.searchHeaderContainer}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.searchIconContainer}>
          <IconButton
            onPress={() => navigation.goBack()}
            containerStyle={{
              marginRight: SIZES.base,
            }}
            iconComponent={
              <Ionicons
                name="ios-arrow-back-outline"
                size={30}
                color={colors.text}
              />
            }
          />
          <Text style={styles.title}>Search</Text>
        </View>

        <View style={styles.searchIconContainer}>
          <IconButton
            onPress={() => navigation.navigate("Help")}
            containerStyle={{}}
            iconComponent={
              <Ionicons
                name="information-circle-outline"
                size={30}
                color={colors.text}
              />
            }
          />
        </View>
      </View>
      <View style={styles.searchInputContainer}>
        <CustomInput
          prependComponent={
            <Ionicons name="ios-search-outline" size={24} color={colors.text} />
          }
          containerStyle={styles.searchInput}
          placeholder="Search"
          name="search"
          control={control}
          props={{
            onFocus: () => {
              setPressed(true);
            },
            onBlur: () => {
              setPressed(false);
            },
          }}
          appendComponent={
            pressed && (
              <Entypo
                name="cross"
                size={24}
                color={colors.text}
                onPress={() => {
                  Keyboard.dismiss();
                  reset();
                  setPressed(false);
                }}
              />
            )
          }
          inputContainerStyle={{
            backgroundColor: COLORS.background,
            paddingHorizontal: SIZES.radius,
          }}
        />
      </View>
    </View>
  );
};

export default SearchScreenHeader;

