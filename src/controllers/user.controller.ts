import { Request, Response } from "express";
import {  STATUS_CODE } from "../constants/http-status";
import { IUserController } from "../interfaces/controller-interfaces/IUserController";
import { MESSAGES } from "../constants/messages";
import { IUserServices } from "../interfaces/services-interfaces/IUserServices";
import { STATUS_CODES } from "http";
import { ILoginUser } from "../interfaces/interface";


export class UserController implements IUserController {
    constructor(private readonly userServices:IUserServices){}
    async createUsers(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password, role } = req.body

            if(!name || !email || !password || !role){
                res.status(STATUS_CODE.BAD_REQUEST).json({success:false,message:MESSAGES.FIELD_IS_REQUIRED})
            }
            await this.userServices.createUser({name,email,password,role})
            res.status(STATUS_CODE.CREATED).json({success:true,message:MESSAGES.USER_CREATED})

        } catch (error:unknown) {
            throw new Error(MESSAGES.UNKNOWN_ERROR)
        }
    }

    async userLogin(req: Request, res: Response): Promise<void> {
        try {
            const data:ILoginUser=req.body

            if(!data.email || !data.password){
                res.status(STATUS_CODE.BAD_REQUEST).json({success:false,message:MESSAGES.FIELD_IS_REQUIRED})
            }
            await this.userServices.loginUser(data)

            res.status(STATUS_CODE.OK).json({success:true,message:MESSAGES.LOGIN_SUCCESS})
        } catch (error:unknown) {
            throw new Error(MESSAGES.UNKNOWN_ERROR)

        }
    }

}
