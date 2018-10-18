import React, { Component } from "react";
import AboutMe from "../components/AboutMe"
import MyRecipe from "../components/MyRecipe";
import ImageLoader from "../components/ImageLoader";
import "./Profile.css"

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
            <div>
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsOiK7l9Poc7FU9wrjEVOXGkBlwKp-dzX1yQElM0WvDdqbr7h"></img>
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