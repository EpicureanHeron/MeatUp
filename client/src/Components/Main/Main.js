import React from "react";
import AboutMe from "../AboutMe";
import MyRecipe from "../MyRecipe";
import MyProfile from "../MyProfile";
// import "../Main.css";

const Main = () => (
    <div>
        <MyProfile>
            <h1>PROFILE PIC GOES HERE</h1>
        </MyProfile>
        <AboutMe>
            <h1>BLURB GOES HERE</h1>
        </AboutMe>
        <MyRecipe>
            <h1>RECIPE SECTION GOES HERE</h1>
        </MyRecipe>
    </div>

);



export default Main;