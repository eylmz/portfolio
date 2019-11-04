import * as React from 'react';
import Slider from 'react-slick';
import { EDUCATIONS, SKILLS } from '../../Config/Config';
import './Education.less';
const StarRatingComponent = require('react-star-rating-component');

export class Education extends React.Component{
  getEducation() {
    return EDUCATIONS.map(education => (
      <div className="education-slide" key={education.year}>
        <div className="date">{education.year}</div>
        <h3>{education.department}</h3>
        <h4>{education.school}</h4>
        <span>{education.location}</span>
      </div>
    ));
  }

  getSkills() {
    return SKILLS.map(skill => (
      <li key={skill.name}>
        <span>{skill.name}</span>
        <StarRatingComponent name={skill.name} editing={false} starCount={5} value={3}/>
      </li>
    ))
  }

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false
    };

    return (
      <article id="education">
        <div className="education">
          <h2>Educations</h2>

          <div className="education-slider">
            <Slider {...settings}>
              {this.getEducation()}
            </Slider>
          </div>
        </div>

        <div className="skills">
          <h2>Skills</h2>

          <ul>
            {this.getSkills()}
          </ul>

        </div>
      </article>
    );
  }
}
