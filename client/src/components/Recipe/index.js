import React from "react";

function Recipe({ recipes }) {
  console.log("recipe component: " + JSON.stringify(recipes[0]));
  return (
    <ul>

      {recipes.map(recipe => (
        <div key={recipe.recipe.uri} class = "searchList"> 
        <h4>{recipe.recipe.label} </h4>
        <hr class="searchLine"/>
        <img src = {recipe.recipe.image}/>
        <hr class="searchLine"/>
        <h5>Yield: {recipe.recipe.yield}  <i class="fas fa-user-friends"></i></h5>  
        <h5>Ingredients: {recipe.recipe.ingredientLines} </h5>
        <h5>Preparation <i class="fas fa-hourglass-half"></i> : {recipe.recipe.totalTime} min</h5>
        <h5>Calories: {recipe.recipe.calories}</h5>
        <hr class="searchLine"/>
        <button class="saveButton btn-danger">Save</button></div>
      ))}
    </ul>
  );
}

export default Recipe;
