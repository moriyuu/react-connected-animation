import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/style/index.css";
import PostsList from "./containers/PostsList";
import PostsShow from "./containers/PostsShow";
import { PositionContext } from "./contexts";
import { useConnectedAnimation } from "./useConnectedAnimation";

function App() {
  return (
    <PositionContext.Provider value={useConnectedAnimation()}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <PostsList />} />
          <Route path="/:id" render={() => <PostsShow />} />
        </Switch>
      </Router>
    </PositionContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
