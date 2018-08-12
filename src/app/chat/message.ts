import { User } from "../users/user";
import { Chat } from "./chat";

export class Message {
    Id: number;
    UserId: number;
    User: User;
    ChatId: number;
    Chat: Chat;
    message: string;
    date: Date;
}
