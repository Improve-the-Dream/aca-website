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
              "https://www.congress.gov/bill/118th-congress/house-bill/3442?q=%7B%22search%22%3A%5B%22Deborah+ross%22%5D%7D&s=5&r=2",
              "_blank"
            )
          }
        >
          <CgFileDocument /> H.R. 3442
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.congress.gov/bill/118th-congress/senate-bill/1667?q=%7B%22search%22%3A%5B%22Padilla%22%5D%7D&s=8&r=1",
              "_blank"
            )
          }
        >
          <CgFileDocument /> S. 1667
        </button>
      </div>
    </div>
  );
}

export default Home;
