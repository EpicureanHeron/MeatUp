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
    this.loadNextRecipe();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    if (btnType === 'pick') {
      this.setState({count: this.state.count + 1}, () => this.updateCount(1).then(this.loadNextRecipe))
    } else {
      this.setState({count: this.state.count - 1}, () => this.updateCount(-1).then(this.loadNextRecipe))
    }
  };

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

  // loadTopFive = () => {

  //   return API.getAllRecipes()
  //         this.setState({
  //           count: res.data[index].count 
  //     })
  //      })

  // }
  render() {
    return (
      <div>
        <h1 className="text-center">MeatUp</h1>
        <h3 className="text-center">
          Like Some Meat!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} id={this.state._id}/>
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
