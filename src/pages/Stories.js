import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import storyData from "../components/StoryData";
import { FaQuoteLeft, FaQuoteRight, FaArrowRight } from "react-icons/fa";

function Stories(props) {
  return (
    <div className="Stories" ref={props.refs}>
      <div className="container">
        <Slider autoplay={4000} infinite={true}>
          {storyData.map((value, index) => {
            return (
              <div className="story-card" key={index}>
                <div className="img">
                  <img src={value.image} alt={"Headshot of " + value.name} />
                </div>
                <div className="bio">
                  <div className="quote">
                    <FaQuoteLeft /> {value.quote} <FaQuoteRight />
                  </div>
                  <button onClick={() => window.open(value.link, "_blank")}>
                    Read More <FaArrowRight />
                  </button>
                  <div className="name">{value.name}</div>
                  <div className="description">{value.description}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Stories;
