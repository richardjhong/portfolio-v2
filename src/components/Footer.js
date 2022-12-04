import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #123C69;
`;


function Footer() {
  const socialLinks = [
    {
      "name":"linkedin",
      "url":"https://www.linkedin.com/in/hongjrichard/",
      "className": "faLinkedIn",
      "key": "linkedin-social",
      "icon": FaLinkedin 
    },
    {
      "name":"github",
      "url":"https://github.com/richardjhong",
      "className": "faGithub",
      "key": "github-social",
      "icon": FaGithub
    },
  ]

  return (
    <footer>
    <Title>
      Contact
    </Title>
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
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#about"><i className="icon-up-open" /></a></div>
    </div>
  </footer>
  );
}

export default Footer;
