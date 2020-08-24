import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      {/* Home Page with Search Box */}
      {/* Search Result Page */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
