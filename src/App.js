import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <h2>This is Home Page</h2>} />
          <Route
            path="/other"
            component={() => <h2>This is another page</h2>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
