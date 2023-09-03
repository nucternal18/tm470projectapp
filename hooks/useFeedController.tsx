import * as React from "react";

import { useGetFeedsQuery } from "@global-state/features/feed/feedApiSlice";

import { SectionSchemaProps } from "@models/Feed";

export default function useGetFeedData() {
  const [feedItems, setFeedItems] = React.useState<SectionSchemaProps[]>([]);
  const { data, isLoading, isSuccess } = useGetFeedsQuery();

  // generate a function that will return all the sub sections for all section
  // if a section does not have a subsection, return an object with the section data and add it to the array
  const getSubSections = () => {
    const sections = data?.sections?.find(
      (section) => section.name === "Corporate Social Responsibility (CSR)"
    );

    // Section sub section data List for Nottinghamshire
    const subSections = data?.subSections?.map(
      (subSection: SectionSchemaProps) => {
        return {
          id: subSection.id,
          name: `${subSection.name}`,
          content: subSection.content as string,
          sectionId: subSection.sectionId,
        };
      }
    ) as SectionSchemaProps[];

    const allFeedItems = [sections, ...subSections];

    // remove undefined items
    const filteredItems = allFeedItems.filter(
      (item) => item !== undefined || item !== null
    );

    // return the filtered array
    setFeedItems(filteredItems as SectionSchemaProps[]);
  };

  React.useLayoutEffect(() => {
    if (isSuccess) {
      getSubSections();
    }
  }, [data, isSuccess]);

  const getFeedItemById = (id: string) => {
    const feedItem = feedItems.find((item) => item.id === id);
    return feedItem;
  };

  return { feedItems, isLoading, getFeedItemById };
}
