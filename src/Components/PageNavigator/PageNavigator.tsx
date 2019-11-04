import * as React from 'react';
import { Page } from '../../types';
import './PageNavigator.less';

export interface PageNavigatorProps {
  pages: Page[];
  activePage: number;
}

export class PageNavigator extends React.Component<PageNavigatorProps>{
  render() {
    const { pages, activePage } = this.props;

    return (
      <div id="page-navigator">
        { pages[activePage].page }
      </div>
    );
  }
}
