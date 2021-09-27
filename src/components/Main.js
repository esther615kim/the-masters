import React from "react";
import Popular from "./cards/Popular";
import Magazine from "./cards/Magazine";
import Tips from "./cards/Tips";
import Hidden from "./cards/Hidden";
// import Accordions from "./components/Accordions";

const Main = () => {
  return (
    <React.Fragment>
      <Popular />
      <Hidden />
      <Magazine />
      <Tips />
      {/* <Accordions />  */}
    </React.Fragment>
  );
};

export default Main;
