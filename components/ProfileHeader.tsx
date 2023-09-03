import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import IconButton from "./IconButton";
import { useLogoutMutation } from "@features/auth/authApiSlice";
import { useAppDispatch } from "@global-state/hooks";
import { setError } from "@features/auth/authSlice";
import globalStyles from "@constants/styles";
import useTheme from "@features/theme/useTheme";
import { PartialUserSchemaWithIdProps } from "@models/User";

const ProfileHeader = ({ user }: { user: PartialUserSchemaWithIdProps }) => {
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

