import React from "react";

function Stories(props) {
  const style = {
    height: "500px",
    background: "green",
    padding: "20px",
  };
  return (
    <div ref={props.refs} style={style}>
      Stories
    </div>
  );
}

export default Stories;
