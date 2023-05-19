import { useParams } from "react-router-dom";
import Recipe from "./Recipe";
import { useState } from "react";
import RecipeList from "./RecipeList";

const RecipeByIngredient = ({ recipes }) => {
    const { ingredient } = useParams();
    const show = (recipes.filter((recipe) => recipe.ingredients.includes(ingredient)));

    return (
        <div className="recipe-by-ingredient">
            <RecipeList recipes={show}/>
        </div>
    );
}

export default RecipeByIngredient;