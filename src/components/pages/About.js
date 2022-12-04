import React from 'react';
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import headshot from '../../assets/images/headshot.png'
import { slider } from "../../Data";

export default function About () {
  return (
    <>
    <div className="container-fluid" style={{height: '100vh'}}>
      <div className="row mt-5">
        <div className="col-12 text-center fw-bold fs-1 mb-5" id="heading">
          About <span style={{ color: "#123C69" }}> Me</span>
          <hr
            style={{
              width: "10%",
              margin: "auto",
              height: "7%",
            }}
          />
        </div>
        <div className="col-7 px-5 mx-4 main_hero">
              <div className="fs-3 px-3 text-2">Hi there, my name is</div>
              <div className="text-1">Richard Hong / 홍정기</div>
              <div className="fs-4 px-3 text-2">
                I am &nbsp;
                <span className="fs-2 fw-bold text-3" style={{ color: "#123C69" }}>
                <Typewriter
                  dataToRotate={[
                    [
                      { type: "word", text: "an Engineer." }
                    ],
                    [
                      { type: "word", text: "a Philosopher." }
                    ],
                    [
                      { type: "word", text: "a Language enthusiast." }
                    ]
                  ]}
                  loop={true}
                />
                </span>
              </div>
            </div>
            <div className="col-4" id="image_hero">
              <img src={headshot} alt="headshot" className="image_hero" />
            </div>
        <div className="col-6 px-5 fs-4 pt-5 mt-2" id="text_about">
          My name is <span style={{ color: "#123C69" }}>Richard Hong</span>. I graduated from U.T. Austin and found a conceptual overlap between my Philosophy major and programming, thus affirming my interest in software. I enjoy translating code into a great user experience. Feel free to check out my projects and connect with me if you have a future collaboration endeavor in mind!
        </div>
        <div className="col-6 pt-5" id="stats_about">
          {slider.map((val) => {
            const { text, width } = val;
            return (
              <>
                <div className="mb-3">
                  <span className="fw-bold fs-6">{text}</span>
                  <div className="slider">
                    <div
                      className="inner-slider"
                      style={{ width: `${width}` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  </>
  );
};
