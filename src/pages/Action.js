import React from "react";

function Action(props) {
  const style = {
    height: "500px",
    background: "gray",
    padding: "20px",
  };
  return (
    <div ref={props.refs} style={style}>
      Action
    </div>
  );
}

export default Action;
