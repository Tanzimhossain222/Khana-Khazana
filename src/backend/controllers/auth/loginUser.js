const { userModel } = require("@/backend/model/User")

export const getUserByEmail = async (email) => {
    try {
        const user =await userModel.findOne({ email });
        return user._doc;
    } catch (err) {
        throw err
    }
}

