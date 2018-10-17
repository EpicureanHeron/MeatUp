import React, { Component } from "react";
import AboutMe from "../../Components/AboutMe";
import MyRecipe from "../../Components/MyRecipe";
import ImageLoader from "../../Components/ImageLoader";
import "./Profile.css";

class Profile extends Component {
    
    state={
        aboutText: '',
        descriptionText: ''
    }

    handleAboutChange = data => {
        this.setState({ aboutText: data })
        console.log(data);
    }

    handleDescriptionChange = data => {
        this.setState({ descriptionText: data })
    }

    render() {
        return (
            <div>
            <div>
                <ImageLoader></ImageLoader>
                <AboutMe handleAboutChange={this.handleAboutChange}></AboutMe>
                <MyRecipe handleDescriptionChange={this.handleDescriptionChange}></MyRecipe>
            </div>
            <div className="content">
                { this.state.aboutText }
            </div> 
            <div className="content">
                { this.state.descriptionText } 
            </div>
            </div>
        )
    }

};

export default Profile;