import React from "react";
import "./AboutMe.css";

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Tell us a little about yourself.'
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
            <span>Essay #1</span>
              <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <EssayForm />,
    document.getElementById('app')
  );