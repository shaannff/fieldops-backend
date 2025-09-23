import { Request, Response } from "express";
import {  STATUS_CODE } from "../constants/http-status";
import { IUserController } from "../interfaces/controller-interfaces/IUserController";
import { MESSAGES } from "../constants/messages";
import { IUserServices } from "../interfaces/services-interfaces/IUserServices";


export class UserController implements IUserController {
    constructor(private readonly userServices:IUserServices){}
    async createUsers(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password, role } = req.body

            if(!name || !email || !password || !role){
                res.status(STATUS_CODE.BAD_REQUEST).json({success:false,message:MESSAGES.FIELD_IS_REQUIRED})
            }
            await this.userServices.createUser({name,email,password,role})

        } catch (error) {

        }
    }
}
