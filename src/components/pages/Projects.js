import React from 'react';
import { projects } from "../../Data";
import { FaCode, FaGithub, FaDesktop } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

const Project = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto 30px auto;
  overflow: hidden;
  background: #fff;
  border-radius: 4px 
`

export default function Projects() {
  return (
    <div className="background-alt" id="projects">
      <h2 className="heading"><FaCode /> Projects</h2>
      <div className="container">
        <div className="row">
        {projects.map((val, key) => {
          const { image, alt, heading, github, deployed_site, description, devicons } = val;
          return (
            <Project>
              <div className="project-image">
                <img alt={alt} draggable="false" src={image} width="300" height="50%"/>
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
          </Project> 
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