"use server"

import { updateFavorite } from "@/backend/controllers/recipes";

const toggleFavorite = async (id, authId) => {
    try {
        const user = await updateFavorite(id, authId);

        const sanitizedUser = {
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            favourites: user.favourites,
        };

        return {
            user: sanitizedUser,
        }



    } catch (err) {
        throw err;
    }
}

export default toggleFavorite;