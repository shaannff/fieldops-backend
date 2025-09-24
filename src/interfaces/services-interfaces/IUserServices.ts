import { ICreateUser, ILoginUser } from "../interface";
import { IUser } from "../model-interfaces/interface";

export interface IUserServices {
    createUser(data:ICreateUser):Promise<IUser>
    getUserByEmail(email:string):Promise<IUser | null >
    loginUser(data:ILoginUser):Promise<{user:IUser}>
}