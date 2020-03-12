const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// this matches the route for /api/users
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
