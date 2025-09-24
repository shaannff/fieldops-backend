import { ICreateUser } from "../interfaces/interface";
import { IUser } from "../interfaces/model-interfaces/interface";
import { IUserRepository } from "../interfaces/repository-interfaces/IUserRepository";
import { User } from "../models/user.model";

export class UserRepository implements IUserRepository{
    constructor(){}
    async createUser(data: ICreateUser): Promise<IUser> {
        const user = new User(data)
        return await user.save()
    }
    async findByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({email})
    }
    
}