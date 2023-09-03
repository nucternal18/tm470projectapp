import { Animated, ActivityIndicator, Pressable, useColorScheme } from 'react-native';
import { Text, View } from '@components/Themed';

// hooks (Controller)
import useGetFeedData from '@hooks/useFeedController';
import { FeedItem } from '@components/FeedItem';

// constants
import {  SIZES } from '@constants/theme';
import globalStyles from "@constants/styles";

// zod schemas
import { SectionSchemaProps } from "@models/Feed";

// theme
import useTheme from "@global-state/features/theme/useTheme";

// components
import ScreenHeader from "@components/ScreenHeader";
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@constants/Colors';

export default function Home() {
  const colorScheme = useColorScheme();
  const { feedItems, isLoading } = useGetFeedData();

   const { colors } = useTheme();
   const styles = globalStyles({ colors });

  if (isLoading) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center'}]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Feed"
        rightComponent={
          <Link href="/modal" asChild>
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
            <FeedItem item={item} onPress={() => {}} testID={item.title} />
          );
        }}
        numColumns={1}
      />
    </View>
  );
}

