import React from "react";
import CallingTool from "../components/CallingTool";

function Action(props) {
  return (
    <div className="Action p-30" ref={props.refs}>
      <h1>Take Action</h1>
      <p>
        Call your Senator's Office to encourage them to co-sponsor America's
        CHILDREN Act.
      </p>
      <div className="content">
        <CallingTool />
        <div className="template">
          Hello, my name is <span className="italic">[full name]</span> and I
          live in <span className="italic">[city, state]</span>. I am calling as
          a constituent to ask Representative{" "}
          <span className="italic">[your representative's name]</span> to
          co-sponsor HR.4331/S.2753, America's CHILDREN Act of 2021, to provide
          permanent protections for children of long-term visa holders who grew
          up in the U.S. while maintaining a documented status. This bill would
          ensure that children who are raised and educated can contribute to the
          United States.{" "}
          <span className="italic">
            [Say a few sentences about your personal experience]
          </span>
          . If you have more questions about this issue, more information can be
          found at AmericasChildrenAct.com. Thank you.
        </div>
      </div>
    </div>
  );
}

export default Action;
