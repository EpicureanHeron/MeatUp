const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.findAllRecipe)
  .post(controller.createRecipe);

router.route("/:id")
  .get(controller.findByIdRecipe)
  .delete(controller.removeRecipe)
  .put(controller.updateRecipe)
     

module.exports = router;
