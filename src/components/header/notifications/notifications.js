import React from "react";
import "./notifications.sass";
const Notifications = () => {
  return (
    <div className="notifications ">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.73 29C21.5542 29.3031 21.3018 29.5547 20.9982 29.7295C20.6946 29.9044 20.3504 29.9965 20 29.9965C19.6496 29.9965 19.3054 29.9044 19.0018 29.7295C18.6982 29.5547 18.4458 29.3031 18.27 29M30 25H10C10.7956 25 11.5587 24.6839 12.1213 24.1213C12.6839 23.5587 13 22.7956 13 22V17C13 15.1435 13.7375 13.363 15.0503 12.0503C16.363 10.7375 18.1435 10 20 10C21.8565 10 23.637 10.7375 24.9497 12.0503C26.2625 13.363 27 15.1435 27 17V22C27 22.7956 27.3161 23.5587 27.8787 24.1213C28.4413 24.6839 29.2044 25 30 25V25Z"
          stroke="#5C5C5C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Notifications;
