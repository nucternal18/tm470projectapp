import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { FONTS, COLORS } from "../constants";

interface TextButtonProps {
  label: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

interface Styles {
  button: ViewStyle;
  label: TextStyle;
}

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}: TextButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, contentContainerStyle]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create<Styles>({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    ...FONTS.h3,
  },
});

export default TextButton;
