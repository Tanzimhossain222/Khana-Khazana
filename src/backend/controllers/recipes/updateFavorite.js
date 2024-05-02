import { dbConnect } from "@/backend/db/connectDb";
import { revalidatePath } from "next/cache";

const { userModel } = require("@/backend/model/User");

export const updateFavorite = async (recipeId, authId) => {
    await dbConnect();
    try {
        const user = await userModel.findById(authId);
        const isFavorite = user.favourites.includes(recipeId);

        if (isFavorite) {
            // user.favourites = user.favourites.filter(fav => fav !== recipeId);
            user.favourites.pull(recipeId);
        } else {
            user.favourites.push(recipeId);
        }

        await user.save();

        revalidatePath('/');  // 

        return user

    } catch (err) {

    }

}

