import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  getUserId: function(userName) {
    // console.log(JSON.stringify(userName))
    return axios.get("/api/users/" + userName.userName);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // Gets the book with the given id
  getRecipes: function(q) {
    console.log("get recipes");
    return axios.get("/api/recipes", { params: { q: q } });
  },
  // Deletes the recipe with the given id
  deleteRecipes: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a recipe to the database
  saveRecipes: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  }
};