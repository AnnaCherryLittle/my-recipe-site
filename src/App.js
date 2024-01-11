import { useState, useEffect } from 'react';
import './App.css';
import ComponentRecipes from './Componentrecipes';
import Buttons from './Buttons';


function App() {

  const my_id = "ab891ddf";
  const my_key = "68192bf1bc07c12aa6b9572e65850e12";

  const [search, setSearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [mySubmit, setMySubmit] = useState("ice");
  const [type, setType] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${mySubmit}&app_id=${my_id}&app_key=${my_key}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipe()
  }, [mySubmit])

  const recipeScan = (e) => {
    setSearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setMySubmit(search);
  }

  // const chooseRecipe = ComponentRecipes.filter(element => 
  //   element.recipe.dishType === dishType);
  //   setType(type);
  // }

  return (
    <div> 
      <div className="container-cap">
        <div className="container">
        <h1>Choose a Recipe</h1>
      </div>

      <div className="container-input">
        <form onSubmit={finalSearch}>
          <input className="input" onChange={recipeScan} value = {search} />
        </form>
        <button className="btn" onClick={finalSearch}>🔍</button>
      </div>
      </div>

      {/* <div className="container">
        <Buttons filteredBtnRecipe={chooseRecipe}/>
      </div> */}

      <div className="container-recipes">
      {myRecipes.map((element, index) => (
        <ComponentRecipes key={index}
        label={element.recipe.label} 
        image={element.recipe.image}  
        ingredients={element.recipe.ingredientLines}
        calories={element.recipe.calories}
        dishType={element.recipe.dishType}/>
      ))}
      </div>
    </div>
  );
}

export default App;
