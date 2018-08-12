import { User } from "../users/user";
import { Comments } from "./comments";

export class Forum {
    Id: number;
    UserId: number;
    User: User;
    Comments: Comments[];
    Title: string;
    Content: string;
}
