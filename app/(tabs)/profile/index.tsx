import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// constants
import globalStyles from "@constants/styles";

// theme
import useTheme from "@global-state/features/theme/useTheme";

// components
import { View } from "@components/Themed";
import HeaderBar from "@components/HeaderBar";
import IconButton from "@components/IconButton";

// hooks (Controller)
import useProfileController from "@hooks/useProfileController";
import { PartialUserSchemaWithIdProps } from "@models/User";
import ProfileView from "@components/ProfileView";

export default function Profile() {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = globalStyles({ colors, isList: true });
  const { user, handleLogout } = useProfileController();

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderBar
        title="Profile"
        icon={
          <IconButton
            iconComponent={
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={colors.text}
              />
            }
            onPress={() => router.push("/help")}
          />
        }
        containerStyle={{
          backgroundColor: colors.background,
        }}
      />
      <ProfileView
        user={user as PartialUserSchemaWithIdProps}
        handleLogout={handleLogout}
      />
    </View>
  );
}
