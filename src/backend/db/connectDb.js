import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const cached = {};

export async function dbConnect() {

    if (!MONGO_URI) {
        throw new Error(
            "Please define the MONGO_URI environment variable inside .env.local"
        );
    }

    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }

    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }

    return cached.connection;
}


// import mongoose from "mongoose";

// export async function dbConnect() {
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log("Connected");
//         return conn;
//     } catch(err){
//         console.log(err);
//     }
// }