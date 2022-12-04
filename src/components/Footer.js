import React, { useState } from 'react';
import styled from 'styled-components';
import { socialLinks, websiteTechStack } from '../Data';
import { FiChevronsUp } from "react-icons/fi";
import ReactTooltip from 'react-tooltip';


const List = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
`

const Button = styled.div`
  position: fixed; 
   width: 100%;
   left: 50%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #AC3B61;  
`

const FooterContainer = styled.footer`
  background-color: #EDC7B7;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftOfList = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
`

const TechStackContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CopyrightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export default function Footer() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false)
  }

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
 
  window.addEventListener('scroll', toggleVisible);

  return (
    <div >
      <FooterContainer>
        <LeftOfList>
          <h4 style={{display: "flex", justifyContent: "center"}}>This website was made with:</h4>
          <TechStackContainer>    
            {websiteTechStack.devicons.map(skill => {
              const Icon = skill.icon;
              return (
                <>
                  <Icon 
                    size={28}
                    style={{ margin: 5}} 
                    data-tip={skill.tooltipMessage} 
                    data-for='skillTooltip' 
                    data-place='top'
                  />
                  <ReactTooltip id="skillTooltip" />
                </>
              )
            })}
          </TechStackContainer>
        </LeftOfList>
          <List>   
            {
              socialLinks.map((item)=>{
                const Icon = item.icon
                return(
                  <li key={item.key}>
                    <a href={item.url}>
                      <Icon size={70} style={{ margin: 15, color: "#123C69"}}/>
                    </a>
                  </li>
                )
              })
            }
          </List>
          <CopyrightContainer>
            &copy; 2022 Richard Hong
          </CopyrightContainer>
      </FooterContainer>
      <Button>
        <FiChevronsUp 
          onClick={scrollToTop} 
          style={{display: visible ? 'inline' : 'none'}} 
        />
      </Button> 
    </div>
  );
}

