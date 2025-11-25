import { MessageStatus } from "../enums/message-status.enum";
import { MessageType } from "../enums/message-type.enum";
import { MessageReaction } from "./message-reaction";

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  receiverId?: string;

  content?: string;
  timestamp: Date;

  type: MessageType;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  status: MessageStatus;

  replyTo?: string;
  replySummary?: string;
  mediaUrl?: string;
  mediaDuration?: number;
  reactions?: MessageReaction[];

  isEdited?: boolean;
  isSystem?: boolean;

}
