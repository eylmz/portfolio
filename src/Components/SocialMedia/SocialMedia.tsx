import * as React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import './SocialMedia.less';

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
