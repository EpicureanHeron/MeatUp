import React from "react";
import AboutMe from "../../Components/AboutMe";
import MyRecipe from "../../Components/MyRecipe";
import UserPic from "../../Components/UserPic";
import "./Profile.css";

const Profile = () => (
    <div>
        <UserPic></UserPic>
        <AboutMe></AboutMe>
        <MyRecipe></MyRecipe>
    </div>

);



export default Profile;