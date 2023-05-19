import { useParams } from "react-router-dom";
import Recipe from "./Recipe";
import { useState } from "react";

const RecipeByIngredient = ({ recipes }) => {
    const { ingredient } = useParams();
    const show = (recipes.filter((recipe) => recipe.ingredients.includes(ingredient)));

    return (
        <div className="recipe-by-ingredient">
            {show && show.map((recipe) =>
                <Recipe recipe={recipe} />
            )}
        </div>
    );
}

export default RecipeByIngredient;