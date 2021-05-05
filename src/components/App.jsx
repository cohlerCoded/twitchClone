import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  const PageOne = () => (
    <div>
      PAGE ONE
      <Link to="/pagetwo">Go To Page Two</Link>
    </div>
  );
  const PageTwo = () => (
    <div>
      PAGE TWO
      <Link to="/">
        <button>Go To Page One</button>
      </Link>
    </div>
  );
  return (
    <div className="ui component">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
      </BrowserRouter>
    </div>
  );
};

export default App;
