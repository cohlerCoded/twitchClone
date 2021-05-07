import React, { Component } from "react";

const clientId = process.env.REACT_APP_CLIENTID;

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onClick = () => {
    if (this.state.isSignedIn) this.auth.signOut();
    else this.auth.signIn();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) return null;
    else if (this.state.isSignedIn)
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
