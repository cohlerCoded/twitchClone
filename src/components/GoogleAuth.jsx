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
  renderAuthButton() {
    if (this.state.isSignedIn === null) return <div>IDK if Signedin</div>;
    else if (this.state.isSignedIn) return <div>Signedin</div>;
    else return <div>NOT Signedin</div>;
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
