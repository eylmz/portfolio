import * as React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './Contact.less';

export class Contact extends React.Component {
  render() {
    return (
      <article id="contact">
        <h2>
          Get In Touch

        </h2>

        <div className="form">
          <div className="half">
            <input type="text" placeholder="Subject"/>

            <input type="email" placeholder="Email"/>
          </div>

          <textarea placeholder="Your Message"/>

          <button>Submit <FaChevronRight/></button>
        </div>
      </article>
    );
  }
}
