import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
      "icon": faLinkedin 
    },
    {
      "name":"github",
      "url":"https://github.com/richardjhong",
      "className": "faGithub",
      "key": "github-social",
      "icon": faGithub
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
            return(
              <li key={item.key}>
                <a href={item.url}>
                  <FontAwesomeIcon icon={item.icon} style={{margin: 5}}/>
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