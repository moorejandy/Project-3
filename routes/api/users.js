const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// this matches the route for /api/users
router.route("/")
  .get(usersController.findAll)
  // .get(usersController.findByUserCred)
  .post(usersController.create);

  router.route("/:userName")
  .get(usersController.findByUserCred);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
