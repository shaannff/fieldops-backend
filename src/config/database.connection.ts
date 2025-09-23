import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongoURL as string, { dbName: "fieldops" });
        console.log(`MongoDB connected successfully.: ${connect.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Failed to connect the MongoDB.", error.message);
        } else {
            console.log("An unknown error occurred while connecting to MongoDB.");
        }
        process.exit(1);
    }
}