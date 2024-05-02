import { dbConnect } from "@/backend/db/connectDb";

const { userModel } = require("@/backend/model/User");

export const createUser = async (user) => {
    await dbConnect();
    try {
        const newUser = userModel.create(user);
        return newUser;
    } catch (err) {
        throw err
    }
}

