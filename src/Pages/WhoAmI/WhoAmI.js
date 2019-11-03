import * as React from 'react';
import './WhoAmI.css';
import {MdCake, MdLocationOn, MdPhone, MdEmail} from "react-icons/all";
import {GoPerson} from "react-icons/go";
import {SocialMedia} from "../../Components/SocialMedia/SocialMedia";
import {Typist} from "../../Components/Typist/Typist";

export class WhoAmI extends React.Component{
  state = {
    words: "developer",
  };

  render() {
    const { words } = this.state;

    return (
      <article id="who-am-i">
        <div className="info">
          <span>I'm a</span>
          <span className="primary">
            { Array.isArray(words) ? <Typist words={words} /> : <strong>{words}</strong> }
          </span>

          <SocialMedia/>
        </div>

        <div className="image">
          <img src="http://emre.pw/img/profile.jpg" alt=""/>
        </div>

        <div className="contact-info">
          <ul>
            <li><span>Emre YILMAZ </span><GoPerson/></li>
            <li><span>June 01, 1996 </span><MdCake/></li>
            <li><span>Turkey, Istanbul </span><MdLocationOn/></li>
            <li><span><a href="tel: 00905464721382">+90 546 472 13 82</a></span><MdPhone/></li>
            <li><span><a href="mailto: eylmz058@gmail.com">eylmz058@gmail.com</a></span><MdEmail/></li>
          </ul>
        </div>
      </article>
    );
  }
}
