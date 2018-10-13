import React from "react";
import API from "../../utils/API";



class MyRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      description: '',
      ingredients: '',
      primaryMeats: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleRecipeNameChange = event => {
    this.setState({recipeName: event.target.value});
  }

  handleDescriptionChange = event => {
    this.setState({description: event.target.value});
  }

  handleIngredientsChange = event => {
    this.setState({ingredients: event.target.value});
  }

  handlePrimaryMeatsChange = event => {
    this.setState({recipeName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    API.saveUser({recipeName: this.state.recipeName, description: this.state.description, ingredients: this.state.ingredients, primaryMeats: this.state.primaryMeats})
    .then(() => alert('Success!'))
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          RECIPE NAME:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <label>
          DESCRIPTION:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <label>
          INGREDIENTS:
          <textarea type="text" value={this.state.value} onChange={this.handleChange} ></ textarea>
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <label>
          PRIMARY MEATS:
          <textarea type="text" value={this.state.value} onChange={this.handleChange} ></ textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
  


  export default MyRecipe;