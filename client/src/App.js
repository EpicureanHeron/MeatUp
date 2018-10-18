import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Recipe from "./Pages/Recipe";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Chat from "./Components/Chat";
import RecipeSearch from "./Components/RecipeSearch"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const App = () => (
  <Router>
    <div>
      <Navbar />
      <RecipeSearch />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/home" component={Home} />
      </Wrapper>
      <Chat>
      </Chat>
      <Footer />
    </div>
  </Router>
);

export default App;
