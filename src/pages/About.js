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
        <h1>About Us</h1>
        {/* <h1>Documented Dreamers</h1> */}
        <p>
          Over 250,000 children and young adults are living in the United States
          as dependents of employment-based visa holders. These individuals,
          known as <span className="bold">Documented Dreamers</span>, have grown
          up legally in the United States, attended American schools, and attend
          American universities.
        </p>
        <p>
          These children can remain in dependent status on a parent's
          employment-based nonimmigrant visa until they turn 21. Many are also
          listed as dependents on a parent's green card application. Sadly, due
          to decades-long backlogs and problems with the Child Status Protection
          Act, many of these young adults turn 21 before a visa number for a
          green card finally becomes available. As a result,{" "}
          <span className="bold">
            they lose their status and their opportunity to obtain a green card.
          </span>
        </p>
        <p>
          While most young adults celebrate turning 21, dependents of long-term
          employment-based visa-holders bear a heavy burden. They must obtain
          another status or{" "}
          <span className="bold">leave behind their families</span>—and the only
          country they have ever known—to return to their country of birth.
        </p>
        <p className="long-text">
          When long-term dependents are forced to leave, it is also a loss to
          America's communities and employers. Despite being educated in our
          universities, these young adults, who are overwhelmingly graduates in
          STEM fields, must take their skills and talent to our global
          competitors. The gaps in our immigration laws that force these young
          adults to leave the United States also prevent American companies from
          attracting and retaining critical talent in the United States. Many
          immigrants have left the United States for countries with less
          burdensome immigration policies, often citing their children aging out
          as a factor in their departure. We cannot maintain our competitive
          edge on the world stage unless we commit to doing better by such
          individuals and their families.
        </p>
        <p>
          <span className="bold">America's CHILDREN Act</span> would permanently
          solve the aging-out issue that affects American raised and educated
          children.
        </p>
        <p>
          To learn more, visit{" "}
          <a
            href="https://www.improvethedream.org/"
            target="_blank"
            rel="noreferrer"
          >
            ImproveTheDream.org
          </a>{" "}
          or look at the{" "}
          <a
            href={require("../assets/pdf/America'sChildrenAct_One-Pager.pdf")}
            download="America's Children Act One Pager"
          >
            America's Children Act One Pager
          </a>
          <br />
          If you are someone in this situation, please complete{" "}
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
        {/* <h1>Meet Documented Dreamers</h1> */}
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
          America's CHILDREN Act aims to permanently end aging-out for
          Documented Dreamers.{" "}
        </p>
        <div className="bill-content">
          <BillViewer />
          <div className="details">
            <ul>
              <li>
                <p>
                  <span className="bold">
                    Allows individuals to obtain permanent residency
                  </span>{" "}
                  who were brought to the United States as child dependents of
                  long-term visa holders, have maintained status in the United
                  States for 10 years (including 8 years as dependents), and
                  have graduated from an institution of higher education.
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
