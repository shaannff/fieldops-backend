import { ICreateUser } from "../interface";
import { IUser } from "../model-interfaces/interface";

export interface IUserRepository {
    createUser(data: ICreateUser): Promise<IUser>
    findByEmail(email: string): Promise<IUser | null>
}