import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import history from "../history";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const App = () => {
  return (
    <div className="ui component">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
      </Router>
    </div>
  );
};

export default App;
