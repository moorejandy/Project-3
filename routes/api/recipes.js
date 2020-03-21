const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// this matches the route for /api/recipes
router.route("/")
.get(recipesController.findAll)
.post(recipesController.create);
//   })
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