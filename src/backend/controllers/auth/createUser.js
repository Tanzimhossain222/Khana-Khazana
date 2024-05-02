const { userModel } = require("@/backend/model/User");

export const createUser = async (user) => {
    try {
        const newUser = userModel.create(user);
        return newUser;
    } catch (err) {
        throw err
    }
}

