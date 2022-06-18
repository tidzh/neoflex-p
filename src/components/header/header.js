import React from "react";
import Search from "./search";
import Notifications from "./notifications";

import "./header.sass";

const UserPanel = () => {
  return (
    <header className="user-panel">
      <Search />
      <Notifications />
    </header>
  );
};

export default UserPanel;
