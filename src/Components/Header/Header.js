import * as React from 'react';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="./logo.png" className="logo" alt=""/>
      </header>
    );
  }
}
