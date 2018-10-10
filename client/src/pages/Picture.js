import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Picture extends Component {
  state = {
    image: "",
    recipe: "",
    count: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadTopFive()
  }


  loadTopFive = () => {
    API.getAllRecipes()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Meet New Meats</h1>
        <h3 className="text-center">
          Thumbs up on any meats you'd like to eat!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Wanted to eat {this.state.matchCount} many meats so far!
        </h1>
        <h1 className="text-center">
          These are the top 5 Recipes! {this.state.image}
        </h1>
      </div>
    );
  }
}

export default Picture;
