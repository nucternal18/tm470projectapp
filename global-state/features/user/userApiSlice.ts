import { userApiSlice } from "@global-state/api";
import { CurrentUser, FavoritesProps, UpdatedUser } from "../../../types";
import { setError, setUserState } from "./userSlice";

export const usersSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<CurrentUser, void>({
      query: () => ({
        url: "users/getMe",
      }),
      providesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            dispatch(setUserState({ currentUser: result.data }));
          }
        } catch (error: any) {
          dispatch(setError(error));
        }
      },
    }),
    getUserById: builder.query<CurrentUser, string>({
      query: (id) => ({
        url: `users/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "User", id: result?.id }],
    }),
    updateUser: builder.mutation<
      { success: boolean; message: string },
      UpdatedUser
    >({
      query: (user) => ({
        url: `users/${user.id}`,
        method: "PUT",
        body: { ...user },
      }),
      invalidatesTags: ["User"],
    }),
    resetCredentials: builder.mutation<
      { success: boolean; message: string },
      UpdatedUser
    >({
      query: (user) => ({
        url: `users/resetCredentials/${user.id}`,
        method: "PUT",
        body: { ...user },
      }),
      invalidatesTags: ["User"],
    }),
    getUserFavorites: builder.query<FavoritesProps[], void>({
      query: () => ({
        url: "users/favorites",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Favorite" as const, id })),
              "Favorite",
            ]
          : ["Favorite"],
    }),
    addToFavorites: builder.mutation<
      { success: boolean; message: string },
      {
        contentId: string;
        contentType: string;
        title: string;
        screen: string;
        countyId: string;
      }
    >({
      query: (body) => ({
        url: `users/favorites`,
        method: "POST",
        body: { ...body },
      }),
      invalidatesTags: ["Favorite"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(usersSlice.endpoints.getUserFavorites.initiate());
        } catch {
          dispatch(
            setError({
              name: "FETCH_ERROR",
              message: "Error adding to favorites",
            })
          );
        }
      },
    }),
    removeFromFavorites: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `users/favorites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetUserQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useResetCredentialsMutation,
  useGetUserFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = usersSlice;
