import React, { Component } from "react";

const clientId = process.env.REACT_APP_CLIENTID;

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId,
        scope: "email",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}
