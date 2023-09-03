import React, {useCallback, useEffect, useRef, useState} from "react";
import {
  Animated,
  Pressable,
  Platform,
  ViewStyle,
  StyleSheet,
} from "react-native";
import * as Haptics from "expo-haptics";


import { COLORS, SIZES, SPACING } from "@constants/theme";
import { ISwitchProps } from "types";


const Switch = ({
  id = "Switch",
  checked = false,
  thumbColor = "white",
  activeFillColor,
  inactiveFillColor,
  duration = 250,
  thumbStyle,
  switchStyle,
  style,
  onPress,
  haptic = true,
  ...props
}: ISwitchProps) => {
  const [isChecked, setChecked] = useState(checked);

  const activeColor = activeFillColor || COLORS.switchOn;
  const inactiveColor = inactiveFillColor || COLORS.switchOff;

  const animation = useRef(new Animated.Value(isChecked ? 28 : 2)).current;

  const handleToggle = useCallback(() => {
    setChecked(!isChecked);
    onPress?.(!isChecked);

    /* haptic feedback onPress */
    if (haptic) {
      Haptics.selectionAsync();
    }
  }, [isChecked, haptic, setChecked, onPress]);

  useEffect(() => {
    Animated.timing(animation, {
      duration,
      useNativeDriver: false,
      toValue: isChecked ? 28 : 2,
    }).start();
  }, [isChecked, animation, duration]);

  /* update local state for isChecked when checked prop is updated */
  useEffect(() => {
    if (isChecked !== checked) {
      setChecked(checked);
    }
  }, [isChecked, checked]);

  const bgColor = animation.interpolate({
    inputRange: [2, 28],
    outputRange: [String(inactiveColor), String(activeColor)],
  });

  const switchStyles = StyleSheet.flatten([
    {
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: bgColor,
      height: SIZES.switchHeight,
    },
    switchStyle,
  ]) as ViewStyle;

  const thumbStyles = StyleSheet.flatten([
    thumbStyle,
    {
      width: SIZES.switchThumb,
      height: SIZES.switchThumb,
      backgroundColor: thumbColor,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: SIZES.shadowOffsetWidth,
        height: SIZES.shadowOffsetHeight,
      },
      shadowOpacity: SIZES.shadowOpacity,
      shadowRadius: SIZES.shadowRadius,
      elevation: SIZES.elevation,
      borderRadius: SIZES.switchThumb / 2,
      transform: [{translateX: animation}],
    },
  ]) as ViewStyle;

  const containerStyles = StyleSheet.flatten([
    style,
    {
      overflow: "hidden",
      width: SIZES.switchWidth,
      height: SIZES.switchHeight,
      borderRadius: SIZES.switchHeight,
    },
  ]) as ViewStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const switchID =
    Platform.OS === "android" ? {accessibilityLabel: id} : {testID: id};

  return (
    <Pressable
      {...switchID}
      hitSlop={SPACING.s}
      onPress={handleToggle}
      style={containerStyles}
      {...props}
    >
      <Animated.View style={switchStyles}>
        <Animated.View style={thumbStyles} />
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(Switch);
