
import { findAllRecipes } from "@/backend/controllers/recipes";
import CategoryList from "./CategoryList";
import RecipeCard from "./RecipeCard";

const RecipesList = async () => {
  const allRecipes = await findAllRecipes();

  return (
    <>
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <CategoryList allRecipes={allRecipes}  />

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
              {allRecipes.length > 0 &&
                allRecipes.map((recipe) => {
                  return <RecipeCard key={recipe.id} recipe={recipe} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipesList;
