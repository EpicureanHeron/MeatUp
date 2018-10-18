import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import TopMeat from "../components/TopMeat";



class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      user: "",
      recipeName: "",
      image: "",
      description: "",
      indgredients: "",
      primaryMeat: "",
      count: 0
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  

  // When the component mounts, load the next recipie to be displayed
  componentDidMount() {
    this.getTopFiveRecipes();
    this.loadNextRecipe();
  }


  getTopFiveRecipes = () => {
    const sortByMostLikes = function(recipe1, recipe2) {
      return recipe1.count - recipe2.count
    }
    API.getAllRecipes()
    .then(({data: recipes}) => (
      console.log(recipes),
      recipes.sort(sortByMostLikes)
      .reverse()
      .slice(0, 5)
    ))
    .then(topFive => this.setState({topFive}))
  }

  handleBtnClick = event => {
    let type = 'like'
    // Get the data-value of the clicked button
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.attributes)
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    if (type === 'like') {
      this.setState({count: this.state.count + 1}, () => this.updateCount(1).then(this.loadNextRecipe))
    } else if (type === 'dislike') {
      this.setState({count: this.state.count - 1}, () => this.updateCount(-1).then(this.loadNextRecipe))
    }
  };
  handleLike = e => this.handleBtnClick('like')
  handleDislike = e => this.handleBtnClick('dislike')


  updateCount = plusorminus => {
    console.log(this.state, ' from updateCount')
    return API.updateRecipe(this.state._id, plusorminus)
  }

  loadNextRecipe = () => {
    
    return API.getAllRecipes()
      .then(res => {
        let index = Math.floor(Math.random() * res.data.length);
     this.setState({
       image: res.data[index].image,
       _id: res.data[index]._id,
      });
    })
  }



  render() {
    return (
      <div>
        <h1 className="text-center">MeatUp</h1>
        <h3 className="text-center">
          Like Some Meat!
        </h3>
        <Card image={this.state.image} handleLike={this.handleLike} handleDislike={this.handleDislike} id={this.state._id}/>
        <h1 className="text-center">
          You've liked {this.state.count} meats!
        </h1>
        <br></br>
        <h1 className="text-center">
          These are the Top 5 Meatcipes!
          {this.state.topFive ? <ul>{this.state.topFive.map(recipe => <li><p>{recipe.recipeName}</p><img src={recipe.image} /></li>)}</ul> : null}
        <TopMeat image={this.state.image} />
        </h1>
      </div>
    );
  }

}

export default Recipe
