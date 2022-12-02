import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
    <div className="row">
      <div className="columns">
        <ul className="social-links">
          {
            socialLinks.map((item)=>{
              return(
                <li key={item.key}>
                  <a href={item.url}>
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#about"><i className="icon-up-open" /></a></div>
    </div>
  </footer>
  );
}

export default Footer;