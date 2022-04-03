import React, { useState } from "react";

function CallingTool() {
  const [result, setResult] = useState();

  return (
    <div className="CallingTool tool">
      <div className="form">
        <form>
          <input type="text" name="zip" placeholder="Zipcode" />
          <input type="submit" value="Submit" />
        </form>
      </div>

      {/* form results */}
      <div className="form-results">
        {!result ? (
          <div className="no-results">
            Enter your zip code to find your representatives. If there is any
            error,{" "}
            <a
              href="https://www.congress.gov/members/find-your-member"
              target="_blank"
              rel="noreferrer"
            >
              click here
            </a>{" "}
            to find your representatives.
          </div>
        ) : (
          <div className="results"></div>
        )}
      </div>
    </div>
  );
}

export default CallingTool;
