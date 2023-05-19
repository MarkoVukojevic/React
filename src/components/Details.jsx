import { useState } from "react";
import { useParams } from "react-router-dom";

const Details = ({ data }) => {
    const { recipeId } = useParams();
    const recipe = (data.filter((element) => element.id == recipeId))[0];
    console.log(recipe)
    return (
        <div className="details">
            <h2 className="name">{recipe.name}</h2>
            <p className="instructions">{recipe.instructions}</p>
        </div>

    );
}

export default Details;