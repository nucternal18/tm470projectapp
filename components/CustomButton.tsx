import React from "react";
import { View, Text, StyleSheet, Pressable, ViewStyle, Platform } from "react-native";
import { COLORS, CONTAINER_PRIMARY, FONTS, SIZES } from "../constants/theme";

interface ICustomButtonProps {
  text: string;
  onPress: () => void;
  bgColor?: string;
  fgColor?: string;
  textType?: any;
  buttonType?: ViewStyle;
  isLoading?: boolean;
  testID?: string;
  prependComponent?: React.ReactNode;
}

const CustomButton = ({
  onPress,
  text,
  buttonType = CONTAINER_PRIMARY,
  textType,
  bgColor,
  testID,
  fgColor,
  isLoading,
  prependComponent,
}: ICustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={[
        styles.container,
        buttonType,
      ]}
      testID={testID}
      accessible={true}
      accessibilityLabel={text}
      accessibilityRole="button"
    >
      {isLoading && (prependComponent)}
      <Text style={[styles.text, textType, fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: SIZES.radius,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.primaryDark200,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: COLORS.primaryDark100,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text: {
    ...FONTS.h3,
    color: COLORS.light,
  },
});

export default CustomButton;
