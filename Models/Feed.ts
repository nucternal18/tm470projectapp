import * as z from "zod";

export const SectionSchema = z.object({
  id: z.string().nonempty({}).optional(),
  name: z.string(),
  title: z.string(),
  content: z.string(),
  isLive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  logoIcon: z.string(),
  imageUrl: z.string(),
  videoUrl: z.string(),
  videoTitle: z.string(),
  videoDescription: z.string(),
  author: z.string(),
  summary: z.string(),
  countyId: z.string().nonempty({}).optional(),
  sectionId: z.string().nonempty({}).optional(),
  isSubsection: z.boolean(),
});

export const partialSectionSchema = SectionSchema.partial();

export type SectionSchemaProps = z.infer<typeof SectionSchema>;

export const SectionWithSubSectionSchema = SectionSchema.extend({
  subsections: partialSectionSchema.array().optional(),
});

export const partialSectionWithSubSectionSchema = SectionWithSubSectionSchema.partial();

export type SectionWithSubSectionSchemaProps = z.infer<typeof partialSectionWithSubSectionSchema>;


export const CountySchema = z.object({
  id: z.string().nonempty({}).optional(),
  name: z.string(),
  imageUrl: z.string(),
  logoIcon: z.string(),
  published: z.boolean(),
  viewCount: z.number(),
  isLive: z.boolean(),
  welcome: partialSectionSchema.optional(),
  lep: partialSectionSchema.optional(),
  news: partialSectionSchema.optional(),
  districts: z
    .object({
      id: z.string().nonempty({}).optional(),
      name: z.string(),
      isLive: z.boolean(),
      imageUrl: z.string(),
      logoIcon: z.string(),
      published: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .array()
    .optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  imageFile: z.string(),
});

export const partialCountySchema = CountySchema.partial();

export type CountySchemaProps = z.infer<typeof CountySchema>;

export const FeedSchema = z.object({
  counties: CountySchema.array(),
  sections: SectionWithSubSectionSchema.array(),
  subSection: SectionSchema.optional(),
  districtSections: SectionSchema.array().optional(),
});

export type FeedSchemaProps = z.infer<typeof FeedSchema>;

export const partialFeedSchema = FeedSchema.partial();

export type PartialFeedSchemaProps = z.infer<typeof partialFeedSchema>;
