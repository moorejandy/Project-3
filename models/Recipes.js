var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var RecipesSchema = new Schema({
  
  label: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  ingredients: {
      type: [],
      required: true
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});
// This creates our model from the above schema, using mongoose's model method
var Recipes = mongoose.model("Recipes", RecipesSchema);
// Export the Article model
module.exports = Recipes;