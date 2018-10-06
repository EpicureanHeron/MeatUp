var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },

  date: { 
    type: Date, 
    
   required: true
   },


});

const User = mongoose.model("User", UserSchema);


// Export the Article model
module.exports = User;
