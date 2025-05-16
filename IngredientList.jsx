
const IngredientList = ({ ingredients=[] }) => {

    console.log(ingredients);
    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientList;