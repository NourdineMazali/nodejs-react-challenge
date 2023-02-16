import { Document } from "mongodb";

/** Description of the user Interface */
export interface IUser extends Document {
    username: string,
    email: string,
    password: string,
}