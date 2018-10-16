const router = require("express").Router();
const controller = require("../../controllers/controller");

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const ADMIN = 'admin';
const ADMIN_PASSWORD = 'password';

router.route("/")
  .get(passport.use(new LocalStrategy((username, password, done) => {
    //console.log("passport triggered")
    if (username === ADMIN && password === ADMIN_PASSWORD) {
      done(null, 'TOKEN');
      return;
    }
   // app.get(controller.loginUser)


  })));


module.exports = router;
