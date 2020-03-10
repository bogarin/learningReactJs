import React from "react";
import IsOption from "./IsOption";
import Options from "./Options";

const BodyOptions = props => (
  <div>
    <IsOption  options={props.options} />
    {props.options.length === 0 && (
      <p className="widget__message">por favor agregar una opcion para empezar</p>
    )}
    <Options
      options={props.options}
      handleDeleteOption={props.handleDeleteOption}
    />
  </div>
);

export default BodyOptions;
