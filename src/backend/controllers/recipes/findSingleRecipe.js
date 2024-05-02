import { recipeModel } from "@/backend/model/Recipe";
import { modifyData } from "@/utils/data-utils";

export const findSingleRecipe = async (id) => {
    try {
        const recipe = await recipeModel.findById(id);
        if (recipe) {
            return modifyData(recipe);
        } else {
            return null;
        }

    } catch (error) {
        console.error(error);
    }
}

