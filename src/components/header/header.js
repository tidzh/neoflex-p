import React from "react";
import Search from "./search";
import Notifications from "./notifications";
import UserBio from "./userBio";

import "./header.sass";

const UserPanel = () => {
  return (
    <header className="user-panel">
      <Search />
      <Notifications />
      <UserBio />
    </header>
  );
};

export default UserPanel;
