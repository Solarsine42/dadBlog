import React from "react";
import Topnav from "./components/Topnav";
import Bloghome from "./components/Bloghome";
import { connect } from "react-redux";
// import { Route, Switch } from "react-router-dom";
import { getUsers } from "./store/users/actions";
import { getPosts } from "./store/posts/actions";
import { getComments } from "./store/comments/actions";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
    this.props.dispatch(getPosts());
    this.props.dispatch(getComments());
  }

  render() {
    return (
      <div className="App">
        <main>
          <Topnav />
          <br />
          <Bloghome />
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cars" component={Cars} />
            <Route path="/locations" component={Locations} />
          </Switch> */}
        </main>
      </div>
    );
  }
}

export default connect()(App);
