import {Text, TouchableOpacity, StyleProp, View} from "react-native";
import React from "react";

import {AntDesign} from "@expo/vector-icons";
import globalStyles from "src/constants/styles";
import useTheme from "src/features/theme/useTheme";

interface ButtonProps {
  title: string;
  buttonStyles?: StyleProp<any>;
  onPress: () => void;
  prependIcon?: React.ReactNode;
}

const ProfileSectionButtons = ({title, onPress, buttonStyles, prependIcon}: ButtonProps) => {
  const {colors} = useTheme();
  const styles = globalStyles({colors});
  return (
    <TouchableOpacity
      style={[styles.prSectBtnCTN, buttonStyles]}
      onPress={onPress}
    >
      <View style={styles.itemContent}>
      {prependIcon}
      <Text style={styles.prSectBtnTxt}>{title}</Text>
      </View>
      <AntDesign name="right" size={20} color={colors.text} />
    </TouchableOpacity>
  );
};

export default ProfileSectionButtons;
