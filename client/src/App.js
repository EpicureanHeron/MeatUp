
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Recipe from "./Pages/Recipe";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Chat from "./Components/Chat";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Recipe" component={Recipe} />
        <Route exact path="/home" component={Home} />
      </Wrapper>
      <Chat>
      </Chat>
      <Footer />
    </div>
  </Router>
);


export default App;




