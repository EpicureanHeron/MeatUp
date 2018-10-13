import React from "react";
import API from '../../utils/API';


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      about: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleNameChange = event => {
    this.setState({name: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.password})
  }

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
          NAME:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}

        <label>
          PASSWORD:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}

        <label>
          ABOUT:
          <textarea type="text" value={this.state.about} onChange={this.handleAboutChange} ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


  


  export default AboutMe;