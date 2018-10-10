import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";



import API from "../../utils/API"


class Navbar extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    API.getAllUsers() 
    .then(res=> console.log(res.data)) 
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.firstName || !this.state.lastName) {
    //   alert("Fill out your first and last name please!");
    // } else if (this.state.password.length < 6) {
    //   alert(
    //     `Choose a more secure password ${this.state.firstName} ${this.state
    //       .lastName}`
    //   );
    // } else {
    //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // }

    this.setState({
      username: "",
    
      password: ""
    });
    console.log("submit clicked")
    API.loginUser({
      "username" : this.state.username,
      "password" : this.state.password
    })

  };



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
render = props =>(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      MeatUp
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Recipe Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Profile
          </Link>
        </li>
      </ul>
      <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="username"
          />

          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button className='btn btn-primary' onClick={this.handleFormSubmit}>Submit</button>
        </form>
    </div>
  </nav>
)}

export default Navbar;

