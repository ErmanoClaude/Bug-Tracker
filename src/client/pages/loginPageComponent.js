import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  head() {
    return (
      <Helmet>
        <title>Login Page</title>
      </Helmet>
    );
  }
  routeChange(e){
    e.preventDefault();
    let path = '/auth/google';
    this.props.history.push(path);
    window.location.reload(false);
  }
  render() {
    return (
      <div className="row">
        {this.head()}
        <div className="col-sm-11 col-md-11 col-lg-8 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">
                <i className="fas fa-sign-in-alt mr-2"></i> 
                Login
              </h5>
              <form className="form-signin">
                <hr className="my-4" />
                <button
                  onClick = {this.routeChange}
                  className="btn btn-lg btn-google btn-block text-uppercase"
                >
                  <i className="fab fa-google mr-2"></i> Sign in with Google
                </button>
                <button
                  className="btn btn-lg btn-facebook btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
