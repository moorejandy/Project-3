import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // Gets the book with the given id
  getRecipes: function(q) {
    return axios.get("http://localhost:3001/api/recipes", { params: { q: q } });
  },
  // Deletes the book with the given id
  deleteRecipes: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a book to the database
  saveRecipes: function(userData) {
    return axios.post("/api/recipes", userData);
  }
};