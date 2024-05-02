"use server"

import { createUser } from "@/backend/controllers/auth";
import { generateHash } from "@/utils/hasing";

export const registerUser = async (formData) => {
    try {
        const userData = {};
        userData.firstName = formData.get('fname')
        userData.lastName = formData.get('lname')
        userData.email = formData.get('email')
        userData.password = formData.get('password')

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            throw new Error('All fields are required.');
        }

        //hash password
        userData.password = await generateHash(userData.password);

        const created = await createUser(userData);

        if (!created) {
            throw new Error('User could not be created.');
        }

        return { message: 'User created successfully!' };

    } catch (err) {
        throw err;
    }
}