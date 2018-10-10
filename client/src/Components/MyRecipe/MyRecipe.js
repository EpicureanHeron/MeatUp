import React from "react";
// import "./MyRecipe.css";


class MyRecipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'What is your favorite recipe? Go ahead and write it down here.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="example">
          <form onSubmit={this.handleSubmit}>
            <span>MY RECIPES</span>
              <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
  
  // ReactDOM.render(
  //   <EssayForm />,
  //   document.getElementById('app')
  // );

  export default MyRecipe;