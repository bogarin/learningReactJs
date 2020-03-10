import React from "react";
import BtnDecision from "./BtnDecision";
import BtnRemoveAll from "./BtnRemoveAll";

const Actions = props => (
  <div>
    <BtnDecision  hasOtions={props.hasOtions} handlePick={props.handlePick} />
    <BtnRemoveAll handleDeleteOptions={props.handleDeleteOptions} />
  </div>
);

export default Actions;
