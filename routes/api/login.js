const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.loginUser)



module.exports = router;
