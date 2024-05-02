import { findAllRecipes } from "@/backend/controllers/recipes";
import Loading from "@/components/Loading";
import HeroSection from "@/components/landing/HeroSection";
import RecipesList from "@/components/recipes/RecipesList";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Error from "./error";

export const metadata = {
  title: "Khana Khazana - Home",
  openGraph: {
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 630,
        alt: "Khana Khazana"
      }
    ],
    title: "Khana Khazana",
    description: "Khana Khazana is a collection of recipes from around the world. Find your favorite recipes here. Enjoy cooking and eating delicious food.",
    siteName: "Khana Khazana",
    type: "website",
    locale: "en_US",
  }
};

export default async function Home() {
  const allRecipes = await findAllRecipes();
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <HeroSection />
          <RecipesList allRecipes={allRecipes} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
