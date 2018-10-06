const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.findAllRecipe)
  .post(controller.createRecipe);

router.route("/:id")

  .delete(controller.removeRecipe);

     

module.exports = router;
