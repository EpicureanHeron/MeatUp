import React from "react";
import AboutMe from "../AboutMe";
import MyRecipe from "../MyRecipe";
import MyProfile from "../MyProfile";
import "./UserInfo.css";

const UserInfo = () => (
    <div>
        <MyProfile></MyProfile>
        <AboutMe></AboutMe>
        <MyRecipe></MyRecipe>
    </div>

);



export default UserInfo;