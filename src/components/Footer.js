import React, { useState } from 'react';
import styled from 'styled-components';
import { socialLinks } from '../Data';
import { FiChevronsUp } from "react-icons/fi";

const List = styled.ul`
  display: flex;
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
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
 
  window.addEventListener('scroll', toggleVisible);


  return (
    <footer>
    <div className="row">
      <List>   
        {
          socialLinks.map((item)=>{
            const Icon = item.icon
            return(
              <li key={item.key}>
                <a href={item.url}>
                  <Icon style={{ margin: 5}}/>
                </a>
              </li>
            )
          })
        }
      </List>
      <Button>
      <FiChevronsUp 
        onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} 
      />
      </Button>
    </div>
  </footer>
  );
}

