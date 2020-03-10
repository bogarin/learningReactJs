import React from "react";
 const BtnDecision = props => (
  <button className="big-button" onClick={props.handlePick} disabled={props.hasOtions}>
    what shoul i do?
  </button>
);
export default BtnDecision;