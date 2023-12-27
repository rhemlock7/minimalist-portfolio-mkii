import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error ' + error)
    }
}

export default connectMongoDB;