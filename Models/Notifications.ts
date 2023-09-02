import * as z from "zod";

export enum NotificationType {
  NEW_MESSAGE = "NEW_MESSAGE",
  NEW_COMMENT = "NEW_COMMENT",
  NEW_FEEDBACK = "NEW_FEEDBACK",
  NEW_CONTENT = "NEW_CONTENT",
}

export const NotificationsSchema = z.object({
  id: z.string().nonempty({}).optional(),
  title: z.string(),
  body: z.string(),
  type: z.nativeEnum(NotificationType),
  sectionId: z.string().nonempty({}).optional(),
  userId: z.string().nonempty({}).optional(),
  isRead: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type NotificationsSchemaProps = z.infer<typeof NotificationsSchema>;

export const partialNotificationsSchema = NotificationsSchema.partial();

export type PartialNotificationsSchemaProps = z.infer<typeof partialNotificationsSchema>;
