import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { CurrentUser } from "types";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import IconButton from "./IconButton";
import { useLogoutMutation } from "src/features/auth/authApiSlice";
import { useAppDispatch } from "src/app/hooks";
import { setError } from "src/features/auth/authSlice";
import globalStyles from "src/constants/styles";
import useTheme from "src/features/theme/useTheme";

const ProfileHeader = ({ user }: { user: CurrentUser }) => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { colors } = useTheme();
  const styles = globalStyles({ colors });

  const handleLogout = useCallback(async () => {
    try {
      await logout().unwrap();
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }, []);

  return (
    <View style={styles.profileHeaderContainer}>
      <View style={{flexDirection: "row", alignItems: "flex-start"}}>
        <View style={styles.profileHeaderImgContainer}>
          {user?.imageUrl && (
            <Image
              source={{uri: user.imageUrl}}
              style={styles.profileHeaderImg}
            />
          )}
        </View>
        <View style={styles.profileHeader}>
          <Text style={styles.profileHeaderText}>Welcome</Text>
          <Text style={styles.profileHeaderTitle}>{user?.name}</Text>
          <Text style={styles.profileHeaderText}>{user?.email}</Text>
        </View>
      </View>
      <View>
        <IconButton
          iconComponent={
            <MaterialCommunityIcons
              name="logout"
              size={30}
              color={colors.text}
            />
          }
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;

