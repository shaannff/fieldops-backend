import { IUser } from "../interfaces/model-interfaces/interface";
import { IUserServices } from "../interfaces/services-interfaces/IUserServices";

export class UserServices implements IUserServices{
    constructor(){}
   async createUser(data: ICreateUser): Promise<IUser> {
        try {
            
        } catch (error:unknown) {
            
        }
    }
}