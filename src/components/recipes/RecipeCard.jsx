
import { getBlurData } from "@/utils/blur-generator";
import Image from "next/image";
import Link from "next/link";

const RecipeCard =async ({ recipe }) => {
  const {base64} = await getBlurData(recipe?.image);
  return (
    <div className="card">
      <Link href={`/details/${recipe?.id}`}>
        <Image
          src={recipe.thumbnail}
          className="rounded-md"
          alt={recipe?.name}
          width={300}
          height={160}
          placeholder="blur"
          blurDataURL={base64}
        />
        <h4 className="my-2"> {recipe?.name} </h4>
      </Link>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {recipe?.rating.toFixed(2)} </span>
        <span>By: {recipe.author ? recipe?.author : "Anonymous"} </span>
      </div>
    </div>
  );
};

export default RecipeCard;
