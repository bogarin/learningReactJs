import React from "react";
import Option from "./Option";
const Options = props => (
  <div>
    {props.options.map((option, index) => (
      <Option
        key={option}
        option={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
