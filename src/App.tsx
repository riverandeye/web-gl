import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./reset.css";
import Main from "./view/main";
import withTitle from "./component/with-title";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="*" component={withTitle({ Component: Main })} />
      </Router>
    </>
  );
};

export default App;
