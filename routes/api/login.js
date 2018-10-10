const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .post(controller.loginUser)

module.exports = router;
