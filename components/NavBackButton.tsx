import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import {CountyDistrictStackParamList, StackProps} from "types";
import IconButton from "./IconButton";
import { ColorValue } from "react-native";

interface NavBackButtonProps {
  navigation: StackProps<CountyDistrictStackParamList, "Modal">["navigation"];
  clearContent?(): void;
  iconColor: ColorValue;
}

function NavBackButton({
  navigation,
  clearContent,
  iconColor,
}: NavBackButtonProps) {
  return (
    <IconButton
      iconComponent={
        <MaterialCommunityIcons
          name="chevron-left"
          size={32}
          color={iconColor}
        />
      }
      onPress={() => {
        navigation.goBack();
        clearContent!();
      }}
    />
  );
}

export default NavBackButton;
