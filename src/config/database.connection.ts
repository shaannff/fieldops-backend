export const connectDB = async () => {
    try {

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Failed to connect the MongoDB.", error.message);
        } else {
            console.log("An unknown error occurred while connecting to MongoDB.");
        }
        process.exit(1);
    }
}