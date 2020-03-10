import React from "react";
const IsOption = props => (
  <p className="widget__message">
    {props.options.length > 0 ? "Estas son tus opciones" : "No hay opciones"}
  </p>
);
export default IsOption;
