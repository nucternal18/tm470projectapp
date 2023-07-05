import {feed, ContentState, FavoritesProps} from "types";
import {checkIsFavorite} from "@utils/checkIsFavorite";


export const getContentData = (data: feed, id: string, currentCounty: string, favorites: FavoritesProps[]) => {
  // County data
  const county = data?.counties?.find(cty => cty.name.toLowerCase() === currentCounty.toLowerCase());

  const welcome: Array<ContentState["content"]> = [
    {
      id: county?.welcome.id as string,
      title: county?.welcome.title as string,
      content: county?.welcome.content as string,
      type: "Welcome",
      isFavorite: checkIsFavorite(
        favorites as FavoritesProps[],
        county?.welcome?.id as string,
      ).isFavorite,
      favContentId: checkIsFavorite(
        favorites as FavoritesProps[],
        county?.welcome?.id as string,
      )?.favorite?.id as string,
    },
  ];
  const news: Array<ContentState["content"]> = [
    {
      id: county?.news.id as string,
      title: county?.news.title as string,
      content: county?.news.content as string,
      type: "News",
      isFavorite: checkIsFavorite(
        favorites as FavoritesProps[],
        county?.news?.id as string,
      ).isFavorite,
      favContentId: checkIsFavorite(
        favorites as FavoritesProps[],
        county?.news?.id as string,
      )?.favorite?.id as string,
    },
  ];
  const lep: Array<ContentState["content"]> = [
    {
      id: county?.lep.id as string,
      title: county?.lep.title as string,
      content: county?.lep.content as string,
      type: "LEP",
      isFavorite: checkIsFavorite(
        favorites as FavoritesProps[],
        county?.lep?.id as string,
      ).isFavorite,
      favContentId: checkIsFavorite(
        favorites as FavoritesProps[],
        county?.lep?.id as string,
      )?.favorite?.id as string,
    },
  ];

  // District Sections data List for Nottinghamshire
  const districtSections: Array<ContentState["content"]> = data?.districtSections?.map(
    section => {
      return {
        id: section.id,
        title: `${section.name}`,
        content: section.content as string,
        isFavorite: checkIsFavorite(
          favorites as FavoritesProps[],
          section?.id as string,
        ).isFavorite,
        favContentId: checkIsFavorite(
          favorites as FavoritesProps[],
          section?.id as string,
        )?.favorite?.id as string,
      };
    },
  ) ;

  // Section data List for Nottinghamshire
  const sections: Array<ContentState["content"]> = data?.sections?.map(section => {
    return {
      id: section.id,
      title: section.name,
      content: section.content as string,
      isFavorite: checkIsFavorite(
        favorites as FavoritesProps[],
        section?.id as string,
      ).isFavorite,
      favContentId: checkIsFavorite(
        favorites as FavoritesProps[],
        section?.id as string,
      )?.favorite?.id as string,
    };
  }) ;

  // Section sub section data List for Nottinghamshire
  const sectionSubSections: Array<ContentState["content"]> = data?.subSections?.map(
    subSection => {
      return {
        id: subSection.id,
        title: `${subSection.name}`,
        content: subSection.content as string,
        isFavorite: checkIsFavorite(
          favorites as FavoritesProps[],
          subSection?.id as string,
        ).isFavorite,
        favContentId: checkIsFavorite(
          favorites as FavoritesProps[],
          subSection?.id as string,
        )?.favorite?.id as string,
      };
    },
  ) ;

  const contentData = [
    ...welcome,
    ...news,
    ...lep,
    ...districtSections,
    ...sectionSubSections,
    ...sections,
  ];

  const foundContent = contentData.find(content => content?.id === id);

  return foundContent;
};
