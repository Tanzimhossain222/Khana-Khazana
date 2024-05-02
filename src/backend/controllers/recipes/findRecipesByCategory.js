import { dbConnect } from "@/backend/db/connectDb";
import { recipeModel } from "@/backend/model/Recipe";
import { modifyArrayData } from "@/utils/data-utils";

export const releventRecipes = async (category) => {
    await dbConnect();
    const recipes = await recipeModel.find({ category: category });

    return modifyArrayData(recipes);
}