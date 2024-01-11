function ComponentRecipes ({label, image, calories, ingredients}) {
    return (
        <div className="fon">
            <div className="container-info">
                <h2>{label}</h2>
            </div>

            <div className="container-info">
                <img src={image} alt="picture"/>
            </div>

            <ul className="container-info list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
            </ul>

            <div className="container-info">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default ComponentRecipes;