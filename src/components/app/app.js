import React from "react";
import "./app.sass";
import Navbar from "../navPanel";
import UserPanel from "../header";
import Main from "../main";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UserPanel />
      <Main />
    </div>
  );
};

export default App;
