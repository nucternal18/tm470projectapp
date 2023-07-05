import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputAndroidProps,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";
import { COLORS, FONTS, SIZES } from "../constants";
import globalStyles from "@constants/styles";
import useTheme from "@features/theme/useTheme";

interface ICustomInputProps<T extends FieldValues> {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  props?: TextInputProps;
  control: Control<T, any>;
  name: any;
  required?: boolean | string;
  rules?: any;
  prependComponent?: React.ReactNode;
  appendComponent?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  textInputStyles?: TextStyle;
}

function CustomInput<T extends FieldValues>({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  props,
  control,
  name,
  rules,
  containerStyle,
  prependComponent,
  inputContainerStyle,
  textInputStyles,
  appendComponent,
}: ICustomInputProps<T>){
  const { colors } = useTheme();
  const styles = globalStyles({colors });
  return (
    <View
      style={[
        {
          backgroundColor: "transparent",
          width: "100%",
          marginVertical: 2,
        },
        containerStyle,
      ]}
    >
      {label ? (
        <View style={{marginBottom: SIZES.radius / 4}}>
          <Text style={styles.label}>{label}*</Text>
        </View>
      ) : null}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
          return (
            <>
              <View style={[styles.inputContainer, inputContainerStyle]}>
                {prependComponent}
                <TextInput
                  value={value as string}
                  onChangeText={onChange}
                  placeholder={placeholder}
                  onBlur={onBlur}
                  style={[
                    styles.textInput,
                    textInputStyles,
                    props?.multiline ? styles.inputMultiline : null,
                    {borderColor: error ? COLORS.error : "#e8e8e8"},
                  ]}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  {...props}
                />
                {appendComponent}
              </View>
              {error && (
                <Text style={styles.error}>{error.message || "Error"}</Text>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

export default CustomInput;
