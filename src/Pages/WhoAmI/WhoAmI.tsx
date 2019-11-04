import * as React from 'react';
import { MdCake, MdEmail, MdLocationOn, MdPhone } from 'react-icons/all';
import { GoPerson } from 'react-icons/go';
import { SocialMedia } from '../../Components/SocialMedia/SocialMedia';
import { Typist } from '../../Components/Typist/Typist';
import { PERSONAL_INFO, TYPING_WORDS } from '../../Config/Config';
import './WhoAmI.less';

export class WhoAmI extends React.Component{
  render() {
    return (
      <article id="who-am-i">
        <div className="info">
          <span>I'm a</span>
          <span className="primary">
            { Array.isArray(TYPING_WORDS) ? <Typist words={TYPING_WORDS} /> : <strong>{TYPING_WORDS}</strong> }
          </span>

          <SocialMedia/>
        </div>

        <div className="image">
          <img src="http://emre.pw/img/profile.jpg" alt=""/>
        </div>

        <div className="contact-info">
          <ul>
            <li><span>{PERSONAL_INFO.fullName}</span><GoPerson/></li>
            <li><span>{PERSONAL_INFO.birthday}</span><MdCake/></li>
            <li><span>{PERSONAL_INFO.location}</span><MdLocationOn/></li>
            <li><span><a href={`tel: ${PERSONAL_INFO.telephone}`}>{PERSONAL_INFO.telephone}</a></span><MdPhone/></li>
            <li><span><a href={`mailto: ${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></span><MdEmail/></li>
          </ul>
        </div>
      </article>
    );
  }
}
