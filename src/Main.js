import React from "react";
import Popular from "./components/cards/Popular";
import Magazine from "./components/cards/Magazine";
import Tips from "./components/cards/Tips";
import Hidden from "./components/cards/Hidden";
import Accordions from "./components/Accordions";

const Main = () => {
  return (
    <React.Fragment>
      <Tips />
      <Hidden />
      <Popular />
      <Magazine />
      <Accordions />
    </React.Fragment>
  );
};

export default Main;
