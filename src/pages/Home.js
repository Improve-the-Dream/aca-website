import React from "react";
import { CgFileDocument } from "react-icons/cg";

function Home(props) {
  return (
    <div className="Home" ref={props.refs}>
      <p className="content p-30">
        <mark className="white">
          The Senate and House have introduced{" "}
          <span className="bold">America's CHILDREN Act</span> to permanently
          protect the children of long-term visa holders from “aging out” of the
          system and protect them from self-deportation when they reach{" "}
          <span className="bold">age 21</span>.
        </mark>
      </p>
      <div className="buttons">
        <button
          onClick={() =>
            window.open(
              "https://www.congress.gov/bill/117th-congress/house-bill/4331/text",
              "_blank"
            )
          }
        >
          <CgFileDocument /> H.R. 4331
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.congress.gov/bill/117th-congress/senate-bill/2753/text?q=%7B%22search%22%3A%5B%22chamberActionDateCode%3A%5C%222021-09-15%7C117%7C10000%5C%22+AND+billIsReserved%3A%5C%22N%5C%22%22%5D%7D&r=5&s=1",
              "_blank"
            )
          }
        >
          <CgFileDocument /> S. 2753
        </button>
      </div>
    </div>
  );
}

export default Home;
