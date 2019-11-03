import * as React from 'react';
import './PageNavigator.css';
import PropTypes from 'prop-types';

export class PageNavigator extends React.Component{
  render() {
    const { pages, activePage } = this.props;

    return (
      <div id="page-navigator">
        { pages[activePage].page }
      </div>
    );
  }
}

PageNavigator.propTypes = {
  pages: PropTypes.array.isRequired,
  activePage: PropTypes.number.isRequired
};
