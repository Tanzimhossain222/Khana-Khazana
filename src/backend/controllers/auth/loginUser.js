import { dbConnect } from "@/backend/db/connectDb";

const { userModel } = require("@/backend/model/User")

export const getUserByEmail = async (email) => {
    await dbConnect();
    try {
        const user =await userModel.findOne({ email });
        return user;
    } catch (err) {
        throw err
    }
}

