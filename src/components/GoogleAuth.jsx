import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const clientId = process.env.REACT_APP_CLIENTID;

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn();
    else this.props.signOut();
  };

  onClick = () => {
    if (this.props.isSignedIn) this.auth.signOut();
    else this.auth.signIn();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return null;
    else if (this.props.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button className="ui blue google button" onClick={this.onClick}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
