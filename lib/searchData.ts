import {CountyDataProps, SearchDataProps, SCREENS, feed} from "types";

export function getSearchData(data: feed, search: string): SearchDataProps[] {
  // County data
  const counties = data?.counties?.find(
    county => county.name === "Nottinghamshire",
  );

  const nottinghamshire: Array<SearchDataProps> = [
    {
      id: counties?.id as CountyDataProps["id"],
      name: counties?.name as CountyDataProps["name"],
      screen: SCREENS.COUNTY,
    },
  ];

  const welcome: Array<SearchDataProps> = [
    {
      id: counties?.welcome.id as string,
      name: counties?.welcome.title as string,
      content: counties?.welcome.content,
      screen: SCREENS.MODAL,
    },
  ];
  const news: Array<SearchDataProps> = [
    {
      id: counties?.news.id as string,
      name: counties?.news.title as string,
      content: counties?.news.content,
      screen: SCREENS.MODAL,
    },
  ];
  const lep: Array<SearchDataProps> = [
    {
      id: counties?.lep.id as string,
      name: counties?.lep.title as string,
      content: counties?.lep.content,
      screen: SCREENS.MODAL,
    },
  ];

  // District data List for Nottinghamshire
  const districts: Array<SearchDataProps> = counties?.districts?.map(
    district => {
      return {
        id: district.id,
        name: district.name,
        screen: SCREENS.DISTRICT,
      };
    },
  ) as SearchDataProps[];

  // District Sections data List for Nottinghamshire
  const districtSections: Array<SearchDataProps> = data?.districtSections?.map(
    section => {
      const districtName = districts.find((district) => district.id === section.districtId)?.name;
      return {
        id: section.id,
        districtId: section.districtId,
        name: `${section.name} - ${districtName}`,
        content: section.content,
        screen: SCREENS.MODAL,
        sections: "DistrictSection",
      };
    },
  ) as SearchDataProps[];

  // Section data List for Nottinghamshire
  const sections: Array<SearchDataProps> = data?.sections?.map(section => {
    return {
      id: section.id,
      name: section.name,
      content: section.content,
      screen: section.content ? SCREENS.MODAL : SCREENS.SECTION,
    };
  }) as SearchDataProps[];

  // Section sub section data List for Nottinghamshire
  const sectionSubSections: Array<SearchDataProps> = data?.subSections?.map(
    subSection => {
      return {
        id: subSection.id,
        sectionId: subSection.sectionId,
        name: `${subSection.name}`,
        content: subSection.content,
        screen: SCREENS.MODAL,
        sections: "CountySectionSubSection",
      };
    },
  ) as SearchDataProps[];

  const searchData: Array<SearchDataProps> = [
    ...welcome,
    ...news,
    ...lep,
    ...nottinghamshire,
    ...districts,
    ...districtSections,
    ...sectionSubSections,
    ...sections
  ];

  if (search === "" || search === null || search === undefined)
    return searchData;

  return searchData?.filter((item: SearchDataProps) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
}
