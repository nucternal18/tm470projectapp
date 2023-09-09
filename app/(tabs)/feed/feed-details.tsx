import React, { useLayoutEffect } from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

// hooks (Controller)
import useFeedController from "@hooks/useFeedController";

// constants
import { SIZES,FONTS } from "@constants/theme";
import globalStyles from "@constants/styles";

// theme
import useTheme from "@global-state/features/theme/useTheme";

const tempImage = require("../../../assets/images/tompodmore.png");

export default function FeedDetails() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = globalStyles({ colors });
  const { feedItem, isLoading, getFeedItemById } = useFeedController();

  useLayoutEffect(() => {
    if (id) {
      getFeedItemById(id as string);
    }
  }, [id, getFeedItemById, isLoading]);

  // write a use layout effect that updates the title of the screen to the feed item title
  // use the feedItem.title as the title of the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: feedItem?.name,
      headerTitleStyle: {...FONTS.h3, color: colors.title},
    });
  }, [feedItem]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container]}>
      <View style={{ height: SIZES.height * 0.4 }}>
        <View style={styles.imageContainer}>
          <Image
            source={
              feedItem?.imageUrl ? { uri: feedItem?.imageUrl } : tempImage
            }
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{feedItem?.name}</Text>
        </View>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          justo donec enim diam. Quam adipiscing vitae proin sagittis. Ipsum a
          arcu cursus vitae congue. Mauris rhoncus aenean vel elit scelerisque
          mauris pellentesque pulvinar pellentesque. Purus in massa tempor nec
          feugiat nisl pretium fusce id. Elementum facilisis leo vel fringilla
          est ullamcorper eget nulla facilisi. Sed vulputate odio ut enim
          blandit. Et tortor at risus viverra adipiscing at in tellus. Dolor
          morbi non arcu risus quis varius quam. Ut enim blandit volutpat
          maecenas volutpat blandit. Tincidunt lobortis feugiat vivamus at augue
          eget arcu dictum. Laoreet non curabitur gravida arcu ac. Cras semper
          auctor neque vitae. Turpis massa sed elementum tempus egestas sed.
          Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.
          Massa massa ultricies mi quis hendrerit dolor magna eget est. Enim
          tortor at auctor urna nunc id cursus. Pulvinar mattis nunc sed blandit
          libero volutpat sed cras.
        </Text>
        <Text style={styles.contentText}>
          Viverra mauris in aliquam sem. Mauris pellentesque pulvinar
          pellentesque habitant morbi tristique senectus et netus. Sed viverra
          tellus in hac. Non arcu risus quis varius quam quisque id. Rhoncus
          mattis rhoncus urna neque viverra. Dictum sit amet justo donec enim
          diam. Placerat orci nulla pellentesque dignissim enim sit amet
          venenatis urna. Blandit cursus risus at ultrices mi tempus imperdiet
          nulla. Integer enim neque volutpat ac tincidunt vitae. Nec sagittis
          aliquam malesuada bibendum arcu vitae elementum curabitur. Tristique
          senectus et netus et malesuada fames ac. Nunc sed id semper risus in
          hendrerit gravida rutrum. Condimentum lacinia quis vel eros. Ornare
          suspendisse sed nisi lacus. Sed libero enim sed faucibus. Sit amet
          massa vitae tortor condimentum. Semper risus in hendrerit gravida
          rutrum quisque non. Varius morbi enim nunc faucibus a. Amet mattis
          vulputate enim nulla aliquet porttitor lacus.
        </Text>
        <Text style={styles.contentText}>
          Adipiscing elit pellentesque habitant morbi tristique senectus et
          netus. Aliquam nulla facilisi cras fermentum odio. Augue mauris augue
          neque gravida in fermentum. Vulputate ut pharetra sit amet aliquam id.
          Maecenas sed enim ut sem. Maecenas ultricies mi eget mauris pharetra
          et ultrices. Et netus et malesuada fames ac. Nibh sit amet commodo
          nulla facilisi nullam vehicula ipsum a. Pretium vulputate sapien nec
          sagittis. Platea dictumst vestibulum rhoncus est pellentesque elit
          ullamcorper. Sit amet nisl purus in mollis nunc sed.
        </Text>
        <Text style={styles.contentText}></Text>
      </View>
    </ScrollView>
  );
}
