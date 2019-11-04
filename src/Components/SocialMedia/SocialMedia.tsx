import * as React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { SOCIAL_MEDIA_LINKS } from '../../Config/Config';
import './SocialMedia.less';

export class SocialMedia extends React.Component{
  render() {
    return (
      <ul className="social-media">
        <li><a href={SOCIAL_MEDIA_LINKS.github}><FiGithub/></a></li>
        <li><a href={SOCIAL_MEDIA_LINKS.linkedin}><FaLinkedinIn/></a></li>
        <li><a href={SOCIAL_MEDIA_LINKS.twitter}><FiTwitter/></a></li>
        <li><a href={SOCIAL_MEDIA_LINKS.instagram}><FiInstagram/></a></li>
        <li><a href={`mailto: ${SOCIAL_MEDIA_LINKS.email}`}><MdEmail/></a></li>
      </ul>
    );
  }
}
