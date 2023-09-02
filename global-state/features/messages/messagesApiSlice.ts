import { messagesApiSlice } from "@global-state/api";
import { PartialMessagesSchemaProps } from "@models/Messages";

type DEFAULT_RESPONSE_PROPS = {success: boolean; message: string};

const messagesApi = messagesApiSlice.injectEndpoints({
    endpoints: (builder) => ({
         getAllReceivedMessagesByUser: builder.query<PartialMessagesSchemaProps[], void>({
      query: () => ({
        url: `/messages/received-by-user`,
      }),
      providesTags: ["Messages"],
    }),
    getAllSentMessagesByUser: builder.query<PartialMessagesSchemaProps[], void>({
      query: () => ({
        url: `/messages/sent-by-user`,
      }),
      providesTags: ["Messages"],
    }),
    getMessageById: builder.query<PartialMessagesSchemaProps, string>({
      query: id => ({
        url: `/messages/${id}`,
      }),
    }),
    sendInAppMessage: builder.mutation<DEFAULT_RESPONSE_PROPS, PartialMessagesSchemaProps>({
      query: message => ({
        url: `/messages`,
        method: "POST",
        body: {...message},
      }),
      invalidatesTags: ["Messages"],
    }),
    updateMsgStatusById: builder.mutation<
      DEFAULT_RESPONSE_PROPS,
      {id: string; isRead: boolean; isArchived: boolean}
    >({
      query: ({id, isRead, isArchived}) => ({
        url: `/messages/update-status/${id}`,
        method: "PUT",
        body: {isRead, isArchived},
      }),
      invalidatesTags: ["Messages"],
    }),
    deleteMessageById: builder.mutation<DEFAULT_RESPONSE_PROPS, string>({
      query: id => ({
        url: `/messages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
  overrideExisting: true,
    })

export const { 
    useGetAllSentMessagesByUserQuery,
    useGetAllReceivedMessagesByUserQuery,
    useGetMessageByIdQuery,
    useSendInAppMessageMutation,
    useUpdateMsgStatusByIdMutation,
    useDeleteMessageByIdMutation,  
} = messagesApi;