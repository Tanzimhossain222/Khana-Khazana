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
            return {
                message: 'All fields are required.',
                status: 400
            }
        }

        //hash password
        userData.password = await generateHash(userData.password);

        const created = await createUser(userData);

        if (!created) {
            return {
                message: 'User already exists!',
                status: 409
            }
        }

        return { message: 'User created successfully!', status: 201 };

    } catch (err) {
        
        return {
            message: err.message,
            status: 500
        }
    }
}