import React from "react";
import Link from "gatsby-link";
import './Navigation.scss';

const Navigation = ({ links, userName }) => (
  <div className='nav'>
    <ul>
      <li className={'name'}>
        <Link to={'/'}>
          {userName}
        </Link>
      </li>
      {
        links && Array.isArray(links) && links.map(link => (
          <li key={link.uri}>
            <Link to={link.uri}>
              {link.text}
            </Link>
          </li>
          ))
        }
      <li>
        <a href="mailto:alex.liam.bezek@gmail.com?Subject=About%20your%20blog">
          E-Mail
        </a>
      </li>
      <li>
        <a href="https://github.com/alex-bezek" target="_blank" rel='noopener noreferrer'>
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/alexander-bezek-b1993b100/" target="_blank" rel='noopener noreferrer'>
          Linkedin
        </a>
      </li>
    </ul>
  </div>
)

export default Navigation;
