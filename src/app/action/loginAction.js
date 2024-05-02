"use server";

import { getUserByEmail } from "@/backend/controllers/auth";
import { hashMatched } from "@/utils/hasing";

const loginUser = async (formData) => {
    try {
        const userData = {};
        userData.email = formData.get('email')
        userData.password = formData.get('password')

        if (!userData.email || !userData.password) {
            return {
                message: 'Please provide email and password!',
                status: 400
            };
        }
        const user = await getUserByEmail(userData.email);

        if (!user) {
            return {
                message: 'User not found!',
                status: 404
            };
        }

        const matched = await hashMatched(userData.password, user.password);

        if (matched) {
            const sanitizedUser = {
                id: user._id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                favourites: user.favourites,
            };
            return { message: 'User logged in successfully!', user: sanitizedUser, status: 200 };
        }

        return {
            message: 'Invalid credentials!',
            status: 401
        };

    } catch (err) {

        return {
            message: err.message,
            status: 500
        };

    }
}

export default loginUser;