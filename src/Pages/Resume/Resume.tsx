import * as React from 'react';
import Slider from 'react-slick';
import { EMPLOYMENTS, SKILLS } from '../../Config/Config';
import './Resume.less';

export class Resume extends React.Component{
  getEmployments() {
    return  EMPLOYMENTS.map(employment => (
      <div className="employment-slide" key={employment.company}>
        <div className="date">{employment.date}</div>
        <h3>{employment.position}</h3>
        <h4>{employment.company}</h4>
        <span>{employment.location}</span>
      </div>
    ));
  }

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false
    };

    return (
      <article id="resume">
        <div className="employment">
          <h2>Employments</h2>

          <div className="employment-slider">
            <Slider {...settings}>
              {this.getEmployments()}
            </Slider>
          </div>
        </div>
      </article>
    );
  }
}
