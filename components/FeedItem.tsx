import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import useTheme from "@global-state/features/theme/useTheme";
import { COLORS, FONTS, SIZES } from "@constants/theme";
import { SectionWithSubSectionSchemaProps } from "@models/Feed";

const tempImage = require("../assets/images/tompodmore.png");

type FeedItemProps = {
  item: SectionWithSubSectionSchemaProps;
  testID?: string;
  onPress: () => void;
};

const ITEM_WIDTH = SIZES.width - 40;
const BORDER_RADIUS = SIZES.radius / 2;

export function FeedItem({ item, testID, onPress }: FeedItemProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.background,
        borderRadius: BORDER_RADIUS,
        marginBottom: SIZES.base,
        width: SIZES.width ,
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: SIZES.base,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 10,
          padding: SIZES.base,
        }}
      >
        <View style={{ width: ITEM_WIDTH / 3, height: "100%", flex: 2 }}>
          <Image
            source={item.imageUrl ? { uri: item.imageUrl } : tempImage}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: BORDER_RADIUS,
            }}
          />
        </View>
        <View style={{  flex: 4, gap: 5 }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.h2,
              color: colors.title,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.p / 1.2,
              color: colors.text,
            }}
            numberOfLines={2}
           
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            deserunt quae fuga quia eum voluptatum odit error, odio fugit ea
            consequuntur? Nulla quos assumenda harum, ea fugit consectetur modi
            ipsam!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
