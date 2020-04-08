import React from "react";

const EditExpresePage = props => {
  console.log(props);
  return <div>Editing the expense with id of {props.match.params.id}</div>;
};
export default EditExpresePage;

//http://localhost:4800/edit?query=rent&sort=date
//pathname: "/edit"
//search: "?query=rent&sort=date"

//http://localhost:4800/edit#contact
//pathname: "/edit"
//hash: "#contact"
