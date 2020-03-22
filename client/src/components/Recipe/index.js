import React from "react";

function Recipe({ recipes }) {
  console.log("recipe component: " + JSON.stringify(recipes[0]));
  return (
    <ul>

      {recipes.map(recipe => (

        <div key={recipe.recipe.uri}> {recipe.recipe.uri} 
        {recipe.recipe.label} 
        <img src = {recipe.recipe.image}/> 
        {recipe.recipe.ingredientLines}</div>
      ))}
    </ul>
  );
}

export default Recipe;
