import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
    const navigate = useNavigate();
    return ( 
        <div className="recipe" onClick={() => navigate('/recipes/'+recipe.id)}>
            {recipe.name}
        </div>
     );
}
 
export default Recipe;