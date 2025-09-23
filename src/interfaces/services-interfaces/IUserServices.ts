import { IUser } from "../model-interfaces/interface";

export interface IUserServices {
    createUser(data:any):Promise<IUser>
}