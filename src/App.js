import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Work from "./pages/work/Work"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="app">
          <Route exact path="/" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App; 