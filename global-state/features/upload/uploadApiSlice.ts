import { uploadApiSlice } from "@global-state/api";
import * as z from "zod";
import { setError, setImageUrl } from "./uploadSlice";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "@global-state/helper";

const uploadApi = uploadApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: { data },
      }),
      invalidatesTags: ["Upload"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setImageUrl(data.imageUrl));
        } catch (error) {
          if (isFetchBaseQueryError(error)) {
            dispatch(
              setError({
                name: error.name,
                message: error.message,
                success: false,
                isError: true,
              })
            );
          } else if (isErrorWithMessage(error)) {
            dispatch(
              setError({
                name: "UPLOAD_ERROR",
                message: error.message,
                success: false,
                isError: true,
              })
            );
          }
        }
      },
    }),
  }),
});

export const { useUploadFileMutation } = uploadApi;