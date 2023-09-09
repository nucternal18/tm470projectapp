import {
  Animated,
  ActivityIndicator,
  Pressable,
  useColorScheme,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

// hooks (Controller)
import useGetFeedController from "@hooks/useFeedController";
import { FeedItem } from "@components/FeedItem";

// constants
import { SIZES } from "@constants/theme";
import globalStyles from "@constants/styles";
import Colors from "@constants/Colors";

// zod schemas
import { SectionSchemaProps } from "@models/Feed";

// theme
import useTheme from "@global-state/features/theme/useTheme";

// components
import { Text, View } from "@components/Themed";
import ScreenHeader from "@components/ScreenHeader";

export default function Home() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { feedItems, isLoading } = useGetFeedController();

  const { colors } = useTheme();
  const styles = globalStyles({ colors });

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Feed"
        leftComponent={
          <Link href="/feed/search" asChild>
            <Pressable>
              {({ pressed }) => (
                <Ionicons
                  name="search-sharp"
                  size={28}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginLeft: 5, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        }
        rightComponent={
          <Link href="/help" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        }
      />
      <Animated.FlatList
        data={feedItems as SectionSchemaProps[]}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        snapToInterval={SIZES.width}
        decelerationRate="normal"
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}
        ListEmptyComponent={() => (
          <View style={[styles.content, { justifyContent: "center" }]}>
            <Text style={styles.contentText}>No content available</Text>
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <FeedItem
              item={item}
              onPress={() =>
                router.push({
                  pathname: "/feed/feed-details",
                  params: { id: item.id },
                })
              }
              testID={item.title}
            />
          );
        }}
        numColumns={1}
      />
    </View>
  );
}
