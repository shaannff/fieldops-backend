import { Request, Response } from "express";

export interface IUserController {
    createUsers(req: Request, res: Response): Promise<void>
}