import * as React from 'react';
import './Navigation.less';

export interface NavigationProps {
  pages: any[];
  activePage: number;
  onClick: (arg0: number) => void;
}

export class Navigation extends React.Component<NavigationProps>{
  getPageButtons() {
    const { pages, activePage, onClick } = this.props;
    return pages.map((page, index) =>
      <li
        key={index}
        className={activePage === index ? 'active' : undefined}
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
