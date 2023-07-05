import React from "react";
import {StyleSheet, Text, View, StatusBar, ViewStyle} from "react-native";

// constants
import {COLORS, FONTS, SIZES} from "src/constants/theme";
import globalStyles from "src/constants/styles";

// redux
import useTheme from "src/features/theme/useTheme";


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

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: SIZES.height * 0.12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.radius,
    paddingTop: SIZES.padding * 2,
    shadowColor: COLORS.primaryDark200,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...FONTS.h1,
    color: COLORS.primaryDark100,
  },
  subtitle: {},
  iconContainer: {
    marginBottom: SIZES.radius / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
