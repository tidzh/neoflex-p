import React from "react";
import Search from "./search";
import Notifications from "./notifications";
import UserBio from "./userBio";
import LogOut from "./log-out";

import "./header.sass";

const UserPanel = () => {
  return (
    <header className="user-panel">
      <Search />
      <Notifications />
      <UserBio />
      <LogOut />
    </header>
  );
};

export default UserPanel;
