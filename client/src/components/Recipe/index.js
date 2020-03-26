import React from "react";


function Recipe({recipes, handleSaveSubmit}) {


  // console.log("recipe component: " + JSON.stringify(recipes[0]));
  return (
    // <ul>
<div>
      {recipes.map(recipe => (
        <div key={recipe.recipe.uri} class = "searchList"> 
        <h4 class="resultLabel">{recipe.recipe.label} </h4>
        <hr class="resultLine"/>
        <img src = {recipe.recipe.image}/>
        <hr class="resultLine"/>
        <h5>Yield: {recipe.recipe.yield}  <i class="fas fa-user-friends"></i></h5>  
        <h5>Ingredients: {recipe.recipe.ingredientLines} </h5>
        <h5>Preparation <i class="fas fa-hourglass-half"></i> : {recipe.recipe.totalTime} min</h5>
        <h5>Calories: {recipe.recipe.calories}</h5>
        <h5>Instructions: <a class="cookingLink" href={recipe.recipe.url}>{recipe.recipe.url}</a></h5>
        <hr class="resultLine"/>
        <button class="saveButton btn-danger btn-lg" 
        onClick={handleSaveSubmit}>Save</button>
        </div>
      ))}
     </div>
  );
}

export default Recipe;
