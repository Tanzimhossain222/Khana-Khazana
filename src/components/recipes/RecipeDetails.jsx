import RecipeHeader from "./RecipeHeader";
import RecipeInstructions from "./RecipeInstructions";

const RecipeDetails = ({ recipe }) => {
  return (
    <>
      <RecipeHeader recipe={recipe} />
      <RecipeInstructions steps={recipe?.steps} />
    </>
  );
};

export default RecipeDetails;
