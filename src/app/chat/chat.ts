import { User } from "../users/user";
import { Message } from "./message";

export class Chat {
    Id: Number;
    UserIds: Number[];
    Users: User[];
    MessageIds: number[];
    Messages: Message[];

}
