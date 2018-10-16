import React from "react";
import API from '../../utils/API';
import axios from "axios";


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // password: '',
      about: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  // handleNameChange = event => {
  //   this.setState({name: event.target.name})
  // }

  // handlePasswordChange = event => {
  //   this.setState({password: event.target.password})
  // }


  handleAboutChange = event => {
    this.setState({about: event.target.about})
    console.log("Changed!");
    this.props.handleAboutChange(event.target.value)
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.name + ' \n');

    event.preventDefault();
    API.saveUser({username: this.state.name, password: this.state.password, about: this.state.about})
    .then(() => alert('it was a success'))

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          ABOUT - TELL US A LITTLE ABOUT YOURSELF:
          <textarea type="text" value={this.state.about} onChange={this.handleAboutChange} ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


  


  export default AboutMe;