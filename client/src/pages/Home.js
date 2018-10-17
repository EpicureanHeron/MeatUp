import React, { Component } from "react";

class Home extends Component {
    state = {
      image: "",
      match: false,
      matchCount: 0
    };

    componentDidMount() {
        console.log("contact")
      }

      render() {
        return (
          <div>
            <h1 className="text-center">Home page</h1>

          </div>
        );
      }

// This closes out the Component bracket up top
}

export default Home