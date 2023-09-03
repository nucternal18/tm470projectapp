import {StyleSheet, View, ActivityIndicator} from "react-native";
import React from "react";

import useTheme from "@features/theme/useTheme";

// constants
import globalStyles from "@constants/styles";
import {COLORS, SIZES} from "@constants/theme";

const LoadingOverlay = () => {
  const {colors} = useTheme();
  const styles = globalStyles({colors});

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "center",
          alignItems: "center",
          padding: SIZES.padding,
        },
      ]}
    >
      <ActivityIndicator size="large" color={colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding,
    backgroundColor: COLORS.light,
  },
});

export default LoadingOverlay;
