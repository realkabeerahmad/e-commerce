import mongoose from 'mongoose';


const connectDB = async (conn_str: any) => {
    try {
        const connect = await mongoose.connect(`${conn_str}`);
        console.log(`MongoDB Connected: ${connect.connection.host, connect.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        // process.exit(1);
    }
}

export default connectDB;