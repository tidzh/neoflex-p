import React from "react";
import "./app.sass";
import Navbar from "../navPanel";
import UserPanel from "../header";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UserPanel />
    </div>
  );
};

export default App;
