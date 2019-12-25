import React from "react";
import { Switch, Route } from "react-router";
import Home from './client/pages/homePageComponent.js';
import Login from './client/pages/loginPageComponent.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home context={this.props.context}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    );
  }
}

export default App;
