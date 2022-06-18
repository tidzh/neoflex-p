import React from "react";

import "./main.sass";
import CreateBtn from "./createBtn";
import Title from "./title";
import "./main.sass";

const Main = () => {
  return (
    <main className="main">
      <header className="content">
        <Title />
        <CreateBtn />
      </header>
    </main>
  );
};

export default Main;
