const { userModel } = require("@/backend/model/User");

export const updateFavorite = async (recipeId, authId) => {
   
    try {
        const user = await userModel.findById(authId);
        const isFavorite = user.favourites.includes(recipeId);

        if(isFavorite){
            // user.favourites = user.favourites.filter(fav => fav !== recipeId);
            user.favourites.pull(recipeId);
        } else {
            user.favourites.push(recipeId);
        }

        await user.save();

        return user
        
    } catch (err) {
        
    }

}

