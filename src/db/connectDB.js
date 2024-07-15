import mongoose from 'mongoose';

const DB_NAME = 'e-commerce'
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONOGDB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB