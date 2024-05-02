
import { findSingleRecipe } from "@/backend/controllers/recipes";
import RecipeDetails from "@/components/recipes/RecipeDetails";

export async function generateMetadata({ params: { id } }) {
  const recipe = await findSingleRecipe(id);

  return {
    title: `Khana Khazana - ${recipe?.name}`,
    description: (recipe?.description).slice(0, 100),
    openGraph: {
      title: `${recipe?.name}`,
      description: (recipe?.description).slice(0, 100),
      url: `https://khanakhazana.vercel.app/details/${id}`,
      type: 'website',
      images: [
        {
          url: recipe?.image,
          width: 1200,
          height: 630,
          alt: recipe?.name
        }
      ]
    }
  }
}


const RecipeDetailsPage = async ({ params: { id } }) => {
  const recipe = await findSingleRecipe(id);

  return (
    <>
      <RecipeDetails recipe={recipe} />
    </>
  )
}

export default RecipeDetailsPage