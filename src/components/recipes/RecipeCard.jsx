/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <Link href={`/details/${recipe?.id}`}>
        <Image
          src={recipe.thumbnail}
          className="rounded-md"
          alt={recipe?.name}
          width={300}
          height={160}
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
