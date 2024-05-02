import { recipeModel } from "@/backend/model/Recipe";
import { modifyArrayData } from "@/utils/data-utils";

export const releventRecipes = async (category) => {
    const recipes = await recipeModel.find({ category: category });

    return modifyArrayData(recipes);
}