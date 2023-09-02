import * as z from "zod";

export const MessagesSchema = z.object({
  id: z.string().nonempty({}).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  from: z.string(),
  to: z.string(),
  subject: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  isArchived: z.boolean(),
});

export type MessagesSchemaProps = z.infer<typeof MessagesSchema>;

export const partialMessagesSchema = MessagesSchema.partial();

export type PartialMessagesSchemaProps = z.infer<typeof partialMessagesSchema>;
