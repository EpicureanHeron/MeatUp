import React, { Component } from "react";
import AboutMe from "../../Components/AboutMe";
import MyRecipe from "../../Components/MyRecipe";
import ImageLoader from "../../Components/ImageLoader";
import "./Profile.css";

class Profile extends Component {
    
    state={
        aboutText: '',
    }

    handleAboutChange = data => {
        this.setState({ aboutText: data })
        console.log(data);
    }

    render() {
        return (
            <div>
                <ImageLoader></ImageLoader>
                <AboutMe handleAboutChange={this.handleAboutChange}></AboutMe>
                <MyRecipe></MyRecipe>
                { this.state.aboutText }
            </div> 

            

        )
    }

};



export default Profile;