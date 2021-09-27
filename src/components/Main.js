import React from "react";
// import Popular from "./components/cards/Popular";
import Magazine from "./cards/Magazine";
// import Tips from "./components/cards/Tips";
import Hidden from "./cards/Hidden";
// import Accordions from "./components/Accordions";

const Main = () => {
  return (
    <React.Fragment>
      <h3>Hi</h3>
      <Hidden />
      <Magazine />
      {/* <Tips />
      <Popular />
      <Accordions /> */}
    </React.Fragment>
  );
};

export default Main;
