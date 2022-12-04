import React, { useState } from 'react';
import { projects } from "../../Data";
import { FaCode, FaGithub, FaDesktop } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';

export default function Projects() {
  const [isHovering, setIsHovering] = useState(false);

  const handleOnMouseOver = () => {
    setIsHovering(true);
  }

  const handleOnMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <div className="background-alt" id="projects">
      <h2 className="heading"><FaCode /> Projects</h2>
      <div className="container">
        <div className="row">
        {projects.map((val, key) => {
          const { image, alt, heading, github, deployed_site, description, devicons } = val;
          return (
            <div className="project" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
            <div className="project-image">
              <div className="project-image"><img alt={alt} draggable="false" src={image} width="300" height="50%"/>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{heading}</h3>
              <p>{description}</p>
              {deployed_site !== null ? (
                <>
                <FaGithub/>
                <a aria-label="github" draggable="false" href={github} target="_blank" rel="noopener noreferrer"> 
                  Github Repo | <FaDesktop /><a aria-label="website" draggable="false" href={deployed_site} target="_blank" rel="noopener noreferrer"> View Project Site</a>
                </a>
              </>
              ) : (
                <>
                <FaGithub />
                <a aria-label="github" draggable="false" href={github} target="_blank" rel="noopener noreferrer"> 
                  Github Repo
                </a>      
              </>
              )}
              <div className="project-skill-container">
                {devicons.map(skill => {
                  const Icon = skill.icon
                  return (
                    <>
                      <Icon 
                        style={{ margin: 5}} 
                        data-tip={skill.tooltipMessage} 
                        data-for='skillTooltip' 
                        data-place='top'
                      />
                      <ReactTooltip id="skillTooltip" />
                    </>
                  )
                })}
              </div>         
            </div>    
          </div> 
          );
        })}            
        </div>
        <div className="text-center col-12 mt-5">
          <a
            href="https://github.com/richardjhong?tab=repositories"
            target="true"
          >
            <button
              className="btn text-white fs-5 px-3 fw-bold col-3"
              id="btn"
            >
              <span style={{ color: "#AC3B61" }}>View More</span>
            </button>
          </a>
        </div>
      </div>
    </div> 
  );
}

    // <>
    //   <div className="container">
    //     <div className="row mt-5">
    //       <div
    //         className="col-12 fs-1 fw-bold text-center mb-5 pb-3"
    //         id="heading"
    //       >
    //         <span style={{ color: "#123C69" }}>My</span> Projects
    //         <hr
    //           style={{
    //             width: "10%",
    //             margin: "auto",
    //             height: "7%",
    //           }}
    //         />
    //       </div>
    //       <div className="d-flex flex-wrap -m-4">
    //         {projects.map((Val, key) => {
    //           const { image, heading, link } = Val;
    //           return (
    //             <>
    //               <div className="project-container col-md-6 d-flex flex-wrap" style={{ backgroundImage: `url(${image})` }}>
    //           <div className="project-card-title">
    //             <h3>{heading}</h3>
    //           </div>
    //             <p className="project-card-description">This app leverages Emotion Analysis API and Spotify API to provide playlists upon detecting the emotion of user input text.
    //             </p>
    //         </div>
    //             </>
    //           );
    //         })}

    //       </div>
    //       <div className="text-center col-12 mt-5">
    //         <a
    //           href="https://github.com/Ateevduggal?tab=repositories"
    //           target="true"
    //         >
    //           <button
    //             className="btn text-white fs-5 px-3 fw-bold col-3"
    //             id="btn"
    //           >
    //             View More
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </>