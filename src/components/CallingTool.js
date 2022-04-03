import React, { useState, useEffect } from "react";
import { getCongressData } from "../functions/CongressData.js";

function CallingTool() {
  const [address, setAddress] = useState();
  const [result, setResult] = useState();
  const [errorMessage, setError] = useState();

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCongressData(address)
      .then((data) => {
        console.log("success", data);
        setResult(data);
        setError();
      })
      .catch((error) => {
        console.log("error", error);
        setResult();
        setError(error.error);
      });
  };

  return (
    <div className="CallingTool tool">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="zip"
            placeholder="Zipcode"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>

      {/* form results */}
      {result ? (
        <table className="form-results">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone #</th>
            </tr>
            {result.map((value, index) => {
              const name = value.type.substring(0, 3) + ". " + value.name;
              const party = value.party;
              const phone = value.phone;

              return (
                <tr key={index}>
                  <td>
                    {name}
                    <div className="party">{party}</div>
                  </td>
                  <td>{phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <></>
      )}

      {/* error */}
      {errorMessage ? <div className="error">{errorMessage}</div> : <></>}

      {/* error alternative */}
      <div className="alternative">
        Enter your zip code to find your representatives. If there are any
        errors,{" "}
        <a
          href="https://www.congress.gov/members/find-your-member"
          target="_blank"
          rel="noreferrer"
        >
          click here
        </a>{" "}
        for an alternative tool.
      </div>
    </div>
  );
}

export default CallingTool;
