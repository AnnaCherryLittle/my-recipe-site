function Buttons({filteredBtnRecipe}) {
    return(
        <div className="btn">
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("main course")}>Main course</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("salad")}>Salad</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("meat")}>Meat</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("fosh")}>Fish</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("dessert")}>Dessert</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("drinks")}>Drinks</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("starter")}>Starter</button>
            <button className="container-btn" onClick = {() =>filteredBtnRecipe("sandwiches")}>Sandwiches</button>
        </div>
    )
}

export default Buttons;