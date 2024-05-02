
import NotFound from "@/app/not-found";
import { findSingleRecipe } from "@/backend/controllers/recipes";
import Loading from "@/components/Loading";
import RecipeDetails from "@/components/recipes/RecipeDetails";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

export async function generateMetadata({ params: { id } }) {
  const recipe = await findSingleRecipe(id);

  if (!recipe) return { title: 'Recipe not found' }

  return {
    title: `Khana Khazana - ${recipe?.name}`,
    description: (recipe?.description).slice(0, 100),
    openGraph: {
      title: `${recipe?.name}`,
      siteName: 'Khana Khazana',
      url: `https://xkhana-khazana.vercel.app/details/${id}`,
      type: 'website',
      images: [
        {
          url: recipe?.image,
          width: 1200,
          height: 630,
          alt: recipe?.name
        }
      ],
      locale: 'en_US',

    },
    twitter: {
      card: 'summary_large_image',
      site: '@kdpTanzim',
      title: `${recipe?.name}`,
      description: (recipe?.description).slice(0, 60),
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

  if (!recipe) {
    return (
      <div className="container">
        <NotFound />
      </div>
    )
  }

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <RecipeDetails recipe={recipe} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default RecipeDetailsPage