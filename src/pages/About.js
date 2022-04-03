import React from "react";
import ReactPlayer from "react-player/youtube";
import BillViewer from "../components/BillViewer";

function About(props) {
  const youtubeVideos = [
    "https://youtu.be/LTbBtKbsrUE",
    "https://youtu.be/i0rMX3ixXJ8",
    "https://youtu.be/pINU3VkJu7A",
    "https://youtu.be/MNNQsdYqzSE",
  ];

  return (
    <div className="About p-30" ref={props.refs}>
      {/* content */}
      <div className="content">
        <h1>Documented Dreamers</h1>
        <p>
          <span className="bold">Documented Dreamers</span> are young immigrants
          who have grown up in the United States as child dependents of
          long-term visa holders without a clear path to citizenship.
        </p>
        <p>
          These Dreamers were brought here at an average age of 5 and have been
          living here for an average time of over 12 years. Due to the
          decades-long green card backlogs affecting some visa holders (H-1B)
          and others having no pathway to citizenship (E-2), we age out and face
          self-deportation from the only home we have ever known after{" "}
          <span className="bold">losing our dependent status at age 21</span>.
        </p>
        <p>
          Documented Dreamers have historically been left out of solutions for
          Dreamers because they do not meet the requirement of being
          undocumented. <span className="bold">America's CHILDREN Act</span>{" "}
          would permanently solve the aging-out issue that affects Documented
          Dreamers.
        </p>
        <p>
          To learn more, visit{" "}
          <a
            href="https://www.improvethedream.org/"
            target="_blank"
            rel="noreferrer"
          >
            ImproveTheDream.org
          </a>
          <br />
          If you are a Documented Dreamer, please complete{" "}
          <a
            href="https://www.improvethedream.org/survey"
            target="_blank"
            rel="noreferrer"
          >
            this survey
          </a>
          .
        </p>
      </div>

      {/* videos */}
      <div className="videos">
        <h1>Meet Documented Dreamers</h1>
        <div className="video-grid">
          {youtubeVideos.map((value, index) => {
            return (
              <div className="vid-container" key={index}>
                <ReactPlayer
                  url={value}
                  controls={true}
                  light={true}
                  height="100%"
                  width="100%"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* bill */}
      <div className="bill">
        <h1>Get to Know the Bill</h1>
        <p>
          Documented Dreamers face self-deportation after aging out of the
          system. America's CHILDREN Act aims to permanently end aging-out for
          Documented Dreamers by providing a clear pathway to citizenship.{" "}
        </p>
        <div className="bill-content">
          <BillViewer />
          <div className="details">
            <ul>
              <li>
                <p>
                  <span className="bold">
                    Provides a pathway to permanent residency
                  </span>{" "}
                  for individuals who were brought to the United States as child
                  dependents of long-term visa holders, have maintained status
                  in the United States for 10 years, and have graduated from an
                  institution of higher education.
                </p>
              </li>
              <li>
                <p>
                  <span className="bold">Establishes age-out protections</span>{" "}
                  that lock in a child's age on the date on which they file for
                  a green card rather than the final action date.
                </p>
              </li>
              <li>
                <p>
                  <span className="bold">Provides work authorization</span> for
                  children of long-term visa holders whose green card
                  applications are pending, if they are at least 16 years old.
                </p>
              </li>
              <li>
                <p>
                  Allows children who have aged out to{" "}
                  <span className="bold">retain original priority date</span>{" "}
                  for subsequent petitions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
