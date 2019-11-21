import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
/*const NewRoute = () => {
  return(
    <div>
      <p>New Route!</p>
    </div>
  );
} 
      <Route path="/new" component={NewRoute} />

*/

//exact keyword required as it includes home in every path - as it starts matching from "/"
//<Route /> - react is smart enough to analyse that this is for when there is no path mentioned
//SWITCH - was added because error route started showing up on every page - so what switch does is that it returns only one first matching route
//if it is not inside SWITCH - it would show up on every route
//navigation component should show us on each page - as we need to navigate to different paths easily

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation /> 
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={Error}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
