const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.findAllUser)
  .post(controller.createUser);

router.route("/:id")

  .delete(controller.removeUser);

     

module.exports = router;
