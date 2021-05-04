import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
