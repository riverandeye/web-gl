import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./reset.css";
import Main from "./view/main";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="*" component={Main} />
      </Router>
    </>
  );
};

export default App;
