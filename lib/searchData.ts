import {
  PartialFeedSchemaProps,
  SectionWithSubSectionSchemaProps,
} from "@models/Feed";

export function getSearchData(
  data: PartialFeedSchemaProps,
  search: string
): SectionWithSubSectionSchemaProps[] {
  // District Sections data List for Nottinghamshire
  const districtSections = data?.districtSections || [];
  // Section Sub Sections data List for Nottinghamshire
  const sectionSubSections = data?.subSections || [];
  // Sections data List for Nottinghamshire
  const sections = data?.sections || [];

  const searchData: SectionWithSubSectionSchemaProps[] = [
    ...districtSections,
    ...sectionSubSections,
    ...sections,
  ];

  if (search) {
    return searchData?.filter((item: SectionWithSubSectionSchemaProps) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    return [];
  }
}
