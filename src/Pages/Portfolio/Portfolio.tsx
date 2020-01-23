import * as React from 'react';
import Slider from 'react-slick';
import { PORTFOLIO } from '../../Config/Config';
import './Portfolio.less';

export class Portfolio extends React.Component {
  getPortfolio() {
    return  PORTFOLIO.map(portfolio => (
      <div className="portfolio-slide" key={portfolio.name}>
        <a href={portfolio.url} target="_blank">
          <img src={portfolio.imageUrl} alt={portfolio.name}/>
          <span>
            <strong>{portfolio.name}</strong>
            <small>Description</small>
          </span>
        </a>
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
      <article id="portfolio">
        <div className="portfolio">
          <h2>Portfolio</h2>

          <div className="portfolio-slider">
            <Slider {...settings}>
              {this.getPortfolio()}
            </Slider>
          </div>
        </div>
      </article>
    );
  }
}
