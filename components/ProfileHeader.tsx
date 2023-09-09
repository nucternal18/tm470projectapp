import React from "react";
import { Image, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// components
import IconButton from "./IconButton";

// constants
import globalStyles from "@constants/styles";

// theme
import useTheme from "@features/theme/useTheme";

// zod schemas
import { PartialUserSchemaWithIdProps } from "@models/User";

const ProfileHeader = ({
  user,
  handleLogout,
}: {
  user: PartialUserSchemaWithIdProps;
  handleLogout: () => void;
}) => {
  const { colors } = useTheme();
  const styles = globalStyles({ colors });

  return (
    <View style={styles.profileHeaderContainer}>
      <View
        style={{ flexDirection: "row", alignItems: "center", flex: 1, gap: 10 }}
      >
        <View style={[styles.profileHeaderImgContainer]}>
          {user?.imageUrl && (
            <Image
              source={{ uri: user.imageUrl }}
              style={styles.profileHeaderImg}
            />
          )}
        </View>
        <View style={[styles.profileHeader, { flex: 1 }]}>
          <Text style={styles.profileHeaderText}>Welcome</Text>
          <Text
            style={[styles.profileHeaderTitle, { flex: 1, flexWrap: "wrap" }]}
          >
            {user?.name}
          </Text>
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
