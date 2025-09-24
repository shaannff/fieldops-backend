import { MESSAGES } from "../constants/messages";
import { ROLES } from "../constants/roles";
import { ICreateUser, ILoginUser } from "../interfaces/interface";
import { IUser } from "../interfaces/model-interfaces/interface";
import { IUserRepository } from "../interfaces/repository-interfaces/IUserRepository";
import { IUserServices } from "../interfaces/services-interfaces/IUserServices";

export class UserServices implements IUserServices {
    constructor(private userRepository: IUserRepository) { }
    async createUser(data: ICreateUser): Promise<IUser> {
        try {
            const existingUser = await this.userRepository.findByEmail(data.email)

            if (existingUser) {
                throw new Error(MESSAGES.USER_EXISTS)
            }

            const user = await this.userRepository.createUser({
                ...data,
                role: data.role || ROLES.USER  
            } as ICreateUser)
            return user
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(MESSAGES.UNKNOWN_ERROR)
            }
              throw new Error("An unknown error occurred while creating the user");
        }
    }

    async  getUserByEmail(email: string): Promise<IUser | null> {
        return this.userRepository.findByEmail(email)
    }

    async loginUser(data: ILoginUser): Promise<{ user: IUser; }> {
        try {
            const userLogined = await this.userRepository.findByEmail(data.email)
            if(!userLogined){
                throw new Error(MESSAGES.USER_NOT_FOUND)
            }

            return{user:userLogined} 
        } catch (error : unknown) {
            throw new Error(MESSAGES.LOGIN_FAILED)
        }
    }
}