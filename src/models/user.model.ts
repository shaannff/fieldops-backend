import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../interfaces/model-interfaces/interface";

const userSchema: Schema<IUser> = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin','fieldWorker'], default: 'user' },

    }, { timestamps: true }
)
export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema)