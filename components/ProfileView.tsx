import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// constants
import { COLORS } from "@constants/theme";
import globalStyles from "@constants/styles";

// theme
import useTheme from "@global-state/features/theme/useTheme";

// components
import { Text, View } from "@components/Themed";
import HeaderBar from "@components/HeaderBar";
import IconButton from "@components/IconButton";
import ProfileHeader from "@components/ProfileHeader";
import ProfileSectionButtons from "@components/ProfileSectionButtons";
import { PartialUserSchemaWithIdProps } from "@models/User";

interface ProfileViewProps {
  user: PartialUserSchemaWithIdProps;
  handleLogout: () => void;
}

export default function ProfileView({ user, handleLogout }: ProfileViewProps) {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = globalStyles({ colors, isList: true });

  return (
    <ScrollView
      style={[styles.container, { paddingTop: StatusBar.currentHeight }]}
      contentContainerStyle={styles.scrollContainer}
    >
      <ProfileHeader
        user={user as PartialUserSchemaWithIdProps}
        handleLogout={handleLogout}
      />
      <View style={styles.section}>
        <Text style={styles.label}>Account Settings</Text>
        <ProfileSectionButtons
          title="Favorites"
          prependIcon={
            <View style={styles.prSectBtnIcon}>
              <MaterialIcons name="favorite" size={20} color={colors.text} />
            </View>
          }
          onPress={() => router.push("/favorites-screen")}
          buttonStyles={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.primaryLight300,
          }}
        />
        <ProfileSectionButtons
          title="Feedback"
          prependIcon={
            <View style={styles.prSectBtnIcon}>
              <MaterialIcons name="feedback" size={20} color={colors.text} />
            </View>
          }
          onPress={() => router.push("/feedback")}
          buttonStyles={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.primaryLight300,
          }}
        />
        <ProfileSectionButtons
          title="Your Details"
          prependIcon={
            <View style={styles.prSectBtnIcon}>
              <MaterialCommunityIcons
                name="account-details"
                size={20}
                color={colors.text}
              />
            </View>
          }
          onPress={() => router.push("/user-details")}
          buttonStyles={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.primaryLight300,
          }}
        />
        <ProfileSectionButtons
          title="Preferences"
          prependIcon={
            <View style={styles.prSectBtnIcon}>
              <MaterialIcons
                name="room-preferences"
                size={20}
                color={colors.text}
              />
            </View>
          }
          onPress={() =>
            router.push({
              pathname: "/preferences-screen",
              params: { userId: user?.id ?? "" },
            })
          }
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Support</Text>
        <ProfileSectionButtons
          title="Help Center"
          prependIcon={
            <View style={styles.prSectBtnIcon}>
              <MaterialIcons name="help" size={20} color={colors.text} />
            </View>
          }
          onPress={() => router.push("/help")}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>App Settings</Text>
        <ProfileSectionButtons
          title="Settings"
          prependIcon={
            <View style={styles.prSectBtnIcon}>
              <MaterialIcons name="settings" size={20} color={colors.text} />
            </View>
          }
          onPress={() => router.push("/settings")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
