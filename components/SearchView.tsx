import React from "react";
import {  FlatList } from "react-native";
import { useRouter } from "expo-router";

// constants
import globalStyles from "@constants/styles";

// components
import CustomButton from "./CustomButton";

// theme
import useTheme from "@global-state/features/theme/useTheme";

// zod schemas
import { SectionWithSubSectionSchemaProps } from "@models/Feed";


export default function SearchView({
  searchResultData,
}: {
  searchResultData: SectionWithSubSectionSchemaProps[];
}) {
  const router = useRouter();

  const { colors } = useTheme();
  const styles = globalStyles({ colors });

  const onPress = React.useCallback(
    (data: SectionWithSubSectionSchemaProps) => {
      router.push({ pathname: "/feed/feed-details", params: { id: data.id } });
    },
    []
  );

  return (
    <>
      <FlatList
        data={searchResultData}
        keyExtractor={(item) => item.id as string}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
        renderItem={({ item }) => (
          <CustomButton
            buttonType={styles.searchListCustomBtn}
            text={item.name as string}
            onPress={() => onPress(item)}
            textType={styles.contentText}
          />
        )}
      />
    </>
  );
}
