import React from "react";
import {StyleSheet, Text, View, StatusBar, ViewStyle} from "react-native";

// constants
import {COLORS, FONTS, SIZES} from "@constants/theme";
import globalStyles from "@constants/styles";

// redux
import useTheme from "@features/theme/useTheme";


type Props = {
  title: string;
  subtitle?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  containerStyle?: ViewStyle;
  leftContainerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle;
};

function ScreenHeader({
  title,
  subtitle,
  leftComponent,
  rightComponent,
  containerStyle,
  leftContainerStyle,
  rightContainerStyle
}: Props) {
  const {colors} = useTheme();
  const styles = globalStyles({colors});
  return (
    <View style={[styles.screenHeaderContainer, containerStyle]}>
      <View style={[styles.screenHeaderIconCont, leftContainerStyle]}>{leftComponent}</View>
      <View
        style={styles.screenTitleContainer}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>
      <View style={[styles.screenHeaderIconCont, rightContainerStyle]}>{rightComponent}</View>
    </View>
  );
}

export default ScreenHeader;
