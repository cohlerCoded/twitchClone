import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const PageOne = () => <div>PAGE ONE</div>;
  const PageTwo = () => (
    <div>
      PAGE TWO
      <button>Click ME</button>
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
