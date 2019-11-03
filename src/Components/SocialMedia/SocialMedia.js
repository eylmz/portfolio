import * as React from 'react';
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './SocialMedia.css';

export class SocialMedia extends React.Component{
  render() {
    return (
      <ul className="social-media">
        <li><a href="https://github.com/eylmz"><FiGithub/></a></li>
        <li><a href="https://www.linkedin.com/in/eylmz058/"><FaLinkedinIn/></a></li>
        <li><a href="https://twitter.com/eylmz058"><FiTwitter/></a></li>
        <li><a href="https://www.instagram.com/eylmz058/"><FiInstagram/></a></li>
        <li><a href="mailto: eylmz058@gmail.com"><MdEmail/></a></li>
      </ul>
    );
  }
}
