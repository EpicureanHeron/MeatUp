import axios from "axios";


export default {
    // RECIPES API CALLS

    //Gets all recipes
    getAllRecipes: function () {
        return axios.get("/api/recipes/");
    },
    // Gets Recipe based on MongoDB ID passed via the function
    getRecipe: function (id) {
        return axios.get("/api/recipes/" + id);
    },
    // Deletes Recipe based on MongoDB ID passed via the function
    deleteRecipe: function (id) {
        return axios.delete("/api/recipes/" + id);
    },
    // Creates Recipe based on the Recipe JSON passed to it
    // look at the models folder and Recipe.js for the format
    saveRecipe: function (recipeJSON) {
        return axios.post("/api/recipes/", recipeJSON);
    },
    // Updates recipe based on the MongoDB passed to it 
    updateRecipe: function (id, update) {
        return axios.put("/api/recipes/" + id, update);
    },

    // USERS API CALLS

    //Gets all the users data in an array 
    getAllUsers: function () {
        return axios.get("/api/users/");
    },
    // Gets the user  with the given mongo db id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the user  with the given mongo db id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Creates a user based on the userJSON passed to it
    // look at the models folder and User.js for the format expected
    saveUser: function (userJSON) {
        return axios.post("/api/users/", userJSON);
    },
    //Updates user based on the MongoDB passed to it 
    updateUser: function (id, update) {
        return axios.put("/api/users/" + id, update);
    },
    //LOGIN Path
    loginUser: function(userData){
        return axios.post("/api/login/", userData)
    }
};
