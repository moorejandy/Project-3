//set up axios calls to API for recipes- something like a go button would initiate this call maybe delete this

const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    console.log("hit");
    const {query: params } = req;
    const {q} = params;
    axios
      .get("https://api.edamam.com/search?q=" + q + "&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422"
      )
      .then(results =>{
        for (i=0; i<results.data.hits.length; i++) {
          console.log(results.data.hits[i].recipe.image);
        results.data.hits.filter(
          result =>
            result.recipe.label &&
            result.recipe.image &&
            // result.recipe.yield &&
            result.recipe.ingredientLines 
          )}
      })
      // .then(apiBooks =>
      //   db.Book.find().then(dbBooks =>
      //     apiBooks.filter(apiBook =>
      //       dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
      //     )
      //   )
      // )
      .then(recipe => res.json(recipe))
      .catch(err => res.status(422).json(err));
  }
};
