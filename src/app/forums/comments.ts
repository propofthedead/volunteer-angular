import { User } from "../users/user";
import { Forum } from "./forum";

export class Comments {
    Id:number;
    UserId: number;
    User: User;
    Content: string;
    Forum: Forum;
    ForumId: number;
}
