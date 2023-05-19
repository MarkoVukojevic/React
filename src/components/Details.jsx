const Details = ({ recipe }) => {
    return ( 
        <div className="details">
            {recipe.name}
            {recipe.instructions}
        </div>
     );
}
 
export default Details;