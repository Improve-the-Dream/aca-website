import React from "react";

function About(props) {
  const style = {
    height: "500px",
    background: "yellow",
    padding: "20px",
  };
  return (
    <div ref={props.refs} style={style}>
      About
    </div>
  );
}

export default About;
