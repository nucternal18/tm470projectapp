import { feed, DistrictDataProps, SectionProps, CountyDataProps} from 'types';
import { contentApiSlice } from "@global-state/api";



const contentApi = contentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountyById: builder.query<CountyDataProps, string>({
      query: (id: string) => ({
        url: `editor/county/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "Content", id: arg }],
    }),
    getCounties: builder.query<feed, void>({
      query: () => ({
        url: "editor/feed",
      }),
      providesTags: ["Content"]
    }),
    getDistrictById: builder.query<DistrictDataProps, string>({
      query: (id) => ({
        url: `editor/district/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "Content", id: arg }],
    }),
    getSectionById: builder.query<SectionProps, string>({
      query: (id) => ({
        url: `editor/section/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "Content", id: arg }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetCountiesQuery,
  useGetCountyByIdQuery,
  useGetDistrictByIdQuery,
  useGetSectionByIdQuery,
} = contentApi;
