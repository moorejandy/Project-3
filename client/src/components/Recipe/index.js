import React from "react";

function Recipe({recipes}) {
  return (
<ul>

  {recipes.map(recipe => (
   
    <li key={recipe.uri}> {recipe.uri} {recipe.label} {recipe.image} {recipe.ingredientLines}</li>
        // {/* <h3>{recipe.label}</h3>
        // <h3>{recipe.image}</h3>
        // <h3>{recipe.ingredientLines}</h3>
        // <h3>{recipe.uri}</h3> */}
  )) }
  </ul>
 );
}

export default Recipe;
