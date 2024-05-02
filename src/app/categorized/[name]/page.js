import { findAllRecipes, releventRecipes } from "@/backend/controllers/recipes";
import RecipeCard from "@/components/recipes/RecipeCard";

export async function generateMetadata({ params }) {
    const categoryName = decodeURIComponent(params.name);
    const recipes = await releventRecipes(categoryName);

    return {
        title: `Khana Khazana - ${categoryName}`,
    }
}

const CategorizedPage = async ({ params }) => {
    const categoryName = decodeURIComponent(params.name);
    let recipes;

    if (categoryName === "All") {
        recipes = await findAllRecipes();
    } else {
        recipes = await releventRecipes(categoryName);
    }

    return (
        <section class="container py-8">
            <div>

                <h3 class="font-semibold text-xl">{ categoryName }</h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                    {recipes.length > 0 &&
                        recipes.map((recipe) => {
                            return <RecipeCard key={recipe.id} recipe={recipe} />;
                        })}
                </div>
            </div>
        </section>
    )
}


export async function generateStaticParams(){
    const categories = ["All", "Breakfast & Brunch", "Dessert"];
    return categories.map((category) => {
        return {
            params: {
                name: encodeURIComponent(category),
            },
        };
    });
}

export default CategorizedPage