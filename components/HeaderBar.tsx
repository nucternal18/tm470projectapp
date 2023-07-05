import React from "react";
import {StyleSheet, Text, View, StyleProp, ViewStyle} from "react-native";

import useTheme from "src/features/theme/useTheme";
import globalStyles from "src/constants/styles";
import {COLORS, SIZES, FONTS} from "../constants";

type HeaderBarProps = {
  title: string;
  icon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

const HeaderBar: React.FC<HeaderBarProps> = ({title, icon, containerStyle}) => {
  const {colors} = useTheme();
  const styles = globalStyles({colors});
  return (
    <View
      style={[
        containerStyle,
        {
          height: 100,
          paddingTop: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          justifyContent: "space-between",
        },
      ]}
    >
      <Text style={{...FONTS.largeTitle, color: colors.text}}>{title}</Text>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeaderBar;
