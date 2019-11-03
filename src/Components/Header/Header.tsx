import * as React from 'react';
import './Header.less';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="./logo.png" className="logo" alt=""/>
      </header>
    );
  }
}
