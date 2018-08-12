import { User } from "../users/user";

export class Event {
    Id: number;
    UserId: number;
    User: User;
    Volunteers: User[];
    Description: string;
    WantedAmountVolunteers: number;
    AmtVolunteers: number;
    Attendance: User[];
}
