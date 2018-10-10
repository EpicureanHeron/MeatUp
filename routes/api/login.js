const router = require("express").Router();
const controller = require("../../controllers/controller");
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;

const ADMIN = 'admin';
const ADMIN_PASSWORD = 'password';

// creates a passport session ? 

//username and password are being sent from the API on React side 
passport.use(new LocalStrategy((username, password, done) => {
  controller.findByUsername()
  .then(res => console.log(res))
  //the ADMIN and ADMIN_PASSWORD need to be replaced with a look up on the mongo DB (perhaps use controller to look up? )
  //then we can validate the session 

 // console.log(controller.findByUsername(username))
  // .then(res=> console.log(res)).catch(err => console.log(err))
  if (username === ADMIN && password === ADMIN_PASSWORD) {
    //the 2nd part is what is passed, so if we are valdiating via the mongo DB, we could make it a user ID potentially! 
    done(null, 'Smoken Token');
    return;
  }
  done(null, false);
}));

router.route("/")

 .post(
   
  passport.authenticate('local', { session: false }),
  (req, res) => {
    //this logs whatever is passed via the donce clause that reads done(null,'smoken token") currently 
    console.log(req.user)
   // console.log(session)
    //don'tS know what this is yet
    res.send({
      token: req.user,
    });
  },
);


module.exports = router;
