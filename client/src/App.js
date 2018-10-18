import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Chat from "./components/Chat";
import "./App.css";
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
      <CollapsibleComponent className="collapsible" trigger="Start Here">
        <CollapsibleHead>MEAT CHAT</CollapsibleHead>
          <CollapsibleContent>
            <Chat>
            </Chat>
          </CollapsibleContent>
      </CollapsibleComponent>
      <Footer />
    </div>
  </Router>
);

export default App;
