import React from "react";
import Search from "./search";

import "./header.sass";

const UserPanel = () => {
  return (
    <header className="user-panel">
      <Search />
    </header>
  );
};

export default UserPanel;
