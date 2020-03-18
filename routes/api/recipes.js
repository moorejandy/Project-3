const router = require("express").Router();
const recipesController = require("../../controllers/recipeAPIController");

// this matches the route for /api/recipes
router
  .get("/",(req, res)=> {
      recipesController.findAll(req, res);
  })
//   .then(res => {
//       console.log(res);
//   })
//   .post(recipesController.create);

// router
//   .route("/:id")
//   .get(recipesController.findById)
//   .put(recipesController.update)
//   .delete(recipesController.remove);

module.exports = router;