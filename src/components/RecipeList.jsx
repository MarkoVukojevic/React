import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
    const [n, setN] = useState(0);
    const [show, setShow] = useState(recipes.slice(0+2*n, 2+2*n));

    useEffect(() => {
        setShow(recipes.slice(0+2*n, 2+2*n));
    }, [n, recipes])

    const [name, setName] = useState('');

    useEffect(() => {
        if(name!=''){
            setShow(recipes.filter((recipe) => recipe.name.includes(name)))
        }
    }, [name])
    return ( 
        <div className="recipe-list">
            <input type="text" id="search" onChange={(e) => setName(e.target.value)}/>
            <div className="pagination">
                <button onClick={() => setN(n-1)} disabled={n<=0} className="pagination-btn">Last page</button>
                <button onClick={() => setN(n+1)} disabled={n>=1} className="pagination-btn">Next page</button>
            </div>
            {recipes && show.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}/>
            ))}
        </div>
     );
}
 
export default RecipeList;