const { userModel } = require("@/backend/model/User");

// {
//     _id: new ObjectId('663261a47d3b2dc5e2053011'),
//     firstName: 'sddd',
//     lastName: 'sddd',
//     email: 'tanzim.pubg6@gmail.com',
//     password: '$2a$10$HRMlub4wWre.C52Sz9oBC.2R67oWrAFHg.Bj5K0lbWthNsJmlmUdi',
//     favourites: [],
//     __v: 0
//   }

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

