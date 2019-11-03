import * as React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

export class Navigation extends React.Component{
  getPageButtons(){
    const { pages, activePage, onClick } = this.props;
    return pages.map((page, index) =>
      <li
        key={index}
        className={activePage === index ? 'active':null}
        onClick={() => onClick(index)}
      >
        {page.icon}
      </li>
    )
  }

  render() {
    return (
      <nav>
        <ul>
          { this.getPageButtons() }
        </ul>
      </nav>
    )
  }
}

Navigation.propTypes = {
  pages: PropTypes.array,
  activePage: PropTypes.number,
  onClick: PropTypes.func
};
