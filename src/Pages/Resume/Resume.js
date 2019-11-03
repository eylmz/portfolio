import * as React from 'react';
import './Resume.css';
import Slider from 'react-slick';

export class Resume extends React.Component{
  state = {
    slides: [
      {
        date: 'February 2019 - Currently',
        position: 'Associate Developer',
        company: 'Trendyol Group',
        city: 'Turkey, Istanbul'
      },
      {
        date: 'July 2018 - January 2019',
        position: 'Full Stack Developer',
        company: 'EKYL Yazılım',
        city: 'Turkey, Sivas'
      },
      {
        date: 'October 2017 - May 2018',
        position: 'Full Stack Developer',
        company: 'Mobileasy',
        city: 'Turkey, Sivas'
      },
      {
        date: 'July 2017 - October 2017',
        position: 'Intern',
        company: 'Havelsan',
        city: 'Turkey, Ankara'
      },
      {
        date: 'July 2016 - July 2017',
        position: 'Full Stack Developer',
        company: 'Mobileasy',
        city: 'Turkey, Sivas'
      },
      {
        date: '2014 - 2016',
        position: 'Back-end Developer',
        company: 'Freelancer',
        city: 'Turkey'
      },
    ]
  };

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false
    };

    const { slides } = this.state;

    return (
      <article id="resume">
        <div className="employment">
          <h2>Employment</h2>

          <div className="employment-slider">
            <Slider {...settings}>
              {
                slides.map(slide => (
                  <div className="employment-slide" key={slide.company}>
                    <div className="date">{slide.date}</div>
                    <h3>{slide.position}</h3>
                    <h4>{slide.company}</h4>
                    <span>{slide.city}</span>
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
