import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
const [search,setSearch]=useState("")
const [query,setQuery]=useState("honey")

  const APP_ID = "a67caf4f";
  const APP_KEY = "718a802198e182b45f62af89448f023f";
  // const ExampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };
 const updateSearch=(e)=>{
   setSearch(e.target.value)
 }
 const handleSubmit=(e)=>{
   e.preventDefault()
   setQuery(search)
   setSearch("")
 }
  return (
    <div className="App container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="search-bar"  value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe-card row row-cols-1 row-cols-md-3 g-4">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
     
    </div>
  );
}

export default App;
