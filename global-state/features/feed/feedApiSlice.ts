import { feedApiSlice } from "@global-state/api";
import {
  CountySchemaProps,
  PartialFeedSchemaProps,
  SectionWithSubSectionSchemaProps,
} from "@models/Feed";

const feedApi = feedApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeeds: builder.query<PartialFeedSchemaProps, void>({
      query: () => ({
        url: "editor/feed",
      }),
      providesTags: ["Content"],
    }),

    getFeedItemById: builder.query<SectionWithSubSectionSchemaProps, string>({
      query: (id) => ({
        url: `editor/section/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "Content", id: arg }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetFeedsQuery,
  useGetFeedItemByIdQuery,
} = feedApi;
