import React from 'react';
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import headshot from '../../assets/images/headshot.png'
import { slider } from "../../Data";
import ReactTooltip from 'react-tooltip';

export default function About () {
  return (
    <>
    <div className="container-fluid" id="about">
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
              <div className="text-1">Richard Hong / <span style={{ color: "#123C69"}}>홍정기</span></div>
              <div className="fs-4 px-3 text-2">
                I am &nbsp;
                <span className="fs-2 fw-bold text-3" style={{ color: "#AC3B61" }}>
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
          <p>
            My name is <span style={{ color: "#123C69" }}>Richard Hong</span>. I'm a Korean American that was born and raised in Texas and a graduate of the University of Texas at Austin. Since graduating, I found a conceptual overlap between my Philosophy major and programming, thus affirming my interest in software. I enjoy translating code into a great user experience. In my spare time, I enjoy studying the etymology of English and Korean words. Feel free to check out my projects and connect with me if you have a future collaboration endeavor in mind!
          </p>
        </div>
        <div className="col-6 pt-5" id="stats_about">
          {slider.map((val) => {
            const { text, width, devicons } = val;
            return (
              <>
                <div className="mb-3">
                  {/* <span className="fw-bold fs-6">{text}</span> */}
                  {devicons.map(skill => {
                  const Icon = skill.icon
                  return (
                    <>
                      <Icon 
                        size={28}
                        style={{ margin: 5}} 
                        data-tip={skill.tooltipMessage} 
                        data-for='skillTooltip' 
                        data-place='right'
                      />
                      <ReactTooltip id="skillTooltip" />
                    </>
                  )
                })}
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
