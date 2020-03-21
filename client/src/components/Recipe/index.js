import React from "react";

function Recipe({ recipes }) {
  console.log("recipe component: " + JSON.stringify(recipes[0]));
  return (
    <ul>

      {recipes.map(recipe => (

        <li key={recipe.recipe.uri}> {recipe.recipe.uri} 
        {recipe.recipe.label} 
        {recipe.recipe.image} 
        {recipe.recipe.ingredientLines}</li>
      ))}
    </ul>
  );
}

export default Recipe;
