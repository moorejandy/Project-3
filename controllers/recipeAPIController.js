//set up axios calls to API for recipes- something like a go button would initiate this call maybe delete this

const axios = require("axios");
// const db = require("../models");

// Defining methods for the recipesController

module.exports = {
  findAll: function(req, res) {
    // const {query: params } = req;
    const {q} = req.params;
    axios
      .get("https://api.edamam.com/search?q=" + "chicken" + "&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422")
      .then(results => {
        results.data.hits.forEach(element => {
          console.log(element.recipe.uri);
        });
        // console.log(results.data.hits);
        res.send([results.data]);
      })
    }

};
