import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const PageOne = () => (
    <div>
      PAGE ONE
      <a href="/pagetwo">Go To Page Two</a>
    </div>
  );
  const PageTwo = () => (
    <div>
      PAGE TWO
      <a href="/">
        <button>Go To Page One</button>
      </a>
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
