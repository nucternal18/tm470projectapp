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
import { FONTS } from "@constants/theme";

interface TextButtonProps {
  label: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  testId?: string;
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
  testId,
  onPress,
}: TextButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, contentContainerStyle]}
      disabled={disabled}
      onPress={onPress}
      aria-label={`Text-Button: ${label}`}
      testID={testId}
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
