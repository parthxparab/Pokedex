import React from "react";
import error404 from "../img/404.jpg";

const NoMatch = () => {
  return (
    <div className="show-body">
      <center>
        <img src={error404} className="Error-logo" alt="logo" />
      </center>
    </div>
  );
};

export default NoMatch;
