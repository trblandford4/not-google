import React from "react";

import "./App.css";

import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  // BEM
  return (
    <div className="App">
      <Router>
        <Switch>
          {/** Search Results Page */}
          <Route path="/search" component={SearchResults} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
