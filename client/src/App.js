import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/home" component={Home} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;