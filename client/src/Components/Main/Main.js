import React from "react";
import AboutMe from "../AboutMe";
import MyRecipe from "../MyRecipe";
import MyProfile from "../MyProfile";
// import "../Main.css";

const Main = () => (
    <div>
        <MyProfile></MyProfile>
        <AboutMe></AboutMe>
            {
                <span>x</span>
            }
        <MyRecipe></MyRecipe>
    </div>

);



export default Main;