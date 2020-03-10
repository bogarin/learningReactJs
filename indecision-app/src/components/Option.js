import React from "react";
const Option = props => {
  const handleDeleteOption = () => {
    props.handleDeleteOption(props.option);
  };

  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.option}
      </p>
      <button className="button button--link" onClick={handleDeleteOption}>
        remove
      </button>
    </div>
  );
};

export default Option;
