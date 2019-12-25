import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  exampleMethod() {
    console.log("Js is running");
  }

  head() {
    return (
      <Helmet>
        <title>Home Page</title>
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>Welcome to</h1>
        <p>Some Contents</p>
        <button type={"button"} className={"btn btn-primary"} onClick={() => this.exampleMethod()}>
          Console log some text
        </button>
        <a href={'https://bug-tracker.glitch.me/auth/google'}> This is going to go to the auth routes</a>
      </div>
    );
  }
}

export default Home;
