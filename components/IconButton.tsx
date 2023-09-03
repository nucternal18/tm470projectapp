import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageStyle,
  GestureResponderEvent,
} from "react-native";
import { COLORS } from "@constants/theme";

interface IconButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  iconComponent: React.ReactNode;
}

const IconButton = ({
  containerStyle,
  onPress,
  iconComponent,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      {iconComponent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primaryDark200,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default IconButton;
