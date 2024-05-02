//find all recipes
import { dbConnect } from "@/backend/db/connectDb";
import { recipeModel } from "@/backend/model/Recipe";
import { modifyArrayData } from "@/utils/data-utils";

export const findAllRecipes = async () => {
    await dbConnect();
    const recipes = await recipeModel.find({});
    return modifyArrayData(recipes);
}


