import React from "react";
import API from "../../utils/API";



class MyRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipeName: '',
      // ingredients: '',
      // primaryMeats: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  

  handleDescriptionChange = event => {
    this.setState({description: event.target.description});
    console.log("Success!");
    this.props.handleDescriptionChange(event.target.value)
  }

  

  handleSubmit(event) {
    event.preventDefault();
    API.saveRecipe({recipeName: this.state.recipeName, description: this.state.description, ingredients: this.state.ingredients, primaryMeats: this.state.primaryMeats})
    .then(() => alert('Success!'))
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          PROVIDE THE NAME AND BRIEF DESCRIPTION OF YOUR FAVORITE RECIPE:
          <textarea type="text" value={this.state.description} onChange={this.handleDescriptionChange} ></ textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
  
  export default MyRecipe;


// FOR REFERENCE ONLY:

// handleRecipeNameChange = event => {
  //   this.setState({recipeName: event.target.recipeName})
  // }

  // handleIngredientsChange = event => {
  //   this.setState({ingredients: event.target.ingredients});
  // }

  // handlePrimaryMeatsChange = event => {
  //   this.setState({primaryMeats: event.target.primaryMeats});
  // }

