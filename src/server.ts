import express, { Application } from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/database.connection';

// ------------------------------------------------------

dotenv.config();

const app: Application = express()
connectDB()


const PORT: number = Number(process.env.PORT)
app.listen(PORT, () => {
    console.log(`server is running on http://localhoast${PORT} `)
})

