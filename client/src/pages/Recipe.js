import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import TopMeat from "../components/TopMeat";


class Recipe extends Component {
  state = {
    _id: "",
    user: "",
    recipeName: "",
    image: "",
    description: "",
    indgredients: "",
    primaryMeat: "",
    count: 0
  };

  // When the component mounts, load the next recipie to be displayed
  componentDidMount() {
    this.loadNextRecipe();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Update recipe count depending on wether or not the user likes the meat
      newState.count = + 1;
      
    } else {
      // If we thumbs down'ed the Meat, we haven't matched with it
      newState.count = - 1;
    }
    // Replace our component's state with newState, load the next recipe image
    this.setState(newState);
    this.loadNextRecipe();
  };

  loadNextRecipe = () => {
    
    API.getAllRecipes()
      .then(res => {
        let index = Math.floor(Math.random() * res.data.length);
     this.setState({
       image: res.data[index].image,
       id: res.data[index]._id,
       count: res.data[index].count
      });
      
    })
  }

  loadTopFive = () => {

    API.getAllRecipes()
       .then(res => {
         let index = Math.floor(Math.random() - res.data.length);
          this.setState({
            count: res.data[index].count 
      })
       })

  }
  render() {
    return (
      <div>
        <h1 className="text-center">MeatUp</h1>
        <h3 className="text-center">
          Like some meat
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} id={this.state.id}/>
        <h1 className="text-center">
          You've liked {this.state.count} meats!
        </h1>
        <h1>
          These are the Top 5 Meatcipes!
        <TopMeat image={this.state.image} />
        </h1>
      </div>
    );
  }

}

export default Recipe
