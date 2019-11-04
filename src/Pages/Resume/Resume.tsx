import * as React from 'react';
import Slider from 'react-slick';
import { EMPLOYMENTS } from '../../Config/Config';
import './Resume.less';

export class Resume extends React.Component{
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false
    };

    return (
      <article id="resume">
        <div className="employment">
          <h2>Employment</h2>

          <div className="employment-slider">
            <Slider {...settings}>
              {
                EMPLOYMENTS.map(employment => (
                  <div className="employment-slide" key={employment.company}>
                    <div className="date">{employment.date}</div>
                    <h3>{employment.position}</h3>
                    <h4>{employment.company}</h4>
                    <span>{employment.city}</span>
                  </div>
                ))
              }

            </Slider>
          </div>
        </div>

        <div className="skills">
          <h2>Skills</h2>
        </div>
      </article>
    );
  }
}
