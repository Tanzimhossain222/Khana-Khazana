"use server";

import { getUserByEmail } from "@/backend/controllers/auth";
import { hashMatched } from "@/utils/hasing";

const loginUser = async (formData) => {
    try {
        const userData = {};
        userData.email = formData.get('email')
        userData.password = formData.get('password')

        if (!userData.email || !userData.password) {
            throw new Error('All fields are required.');
        }
        const user = await getUserByEmail(userData.email);

        if (!user) {
            throw new Error('User not found.');
        }

        const matched = await hashMatched(userData.password, user.password);

        if (!matched) {
            throw new Error('Invalid credentials.');
        }

        const sanitizedUser = {
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            favourites: user.favourites,
        };

        return { message: 'User logged in successfully!', user: sanitizedUser };

    } catch (err) {
        throw err;
    }
}

export default loginUser;