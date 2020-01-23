import * as React from 'react';
import { FaBriefcase } from 'react-icons/fa'
import { GoMortarBoard, GoPerson } from 'react-icons/go'
import { MdEmail, MdMultilineChart } from 'react-icons/md'
import '../Assets/Styles/ReactSlick.css'
import { Header } from '../Components/Header/Header';
import { Navigation } from '../Components/Navigation/Navigation';
import { PageNavigator } from '../Components/PageNavigator/PageNavigator';
import { ACTIVE_PAGE_INDEX } from '../Config/Config';
import { Contact } from '../Pages/Contact/Contact';
import { Education } from '../Pages/Education/Education';
import { Portfolio } from '../Pages/Portfolio/Portfolio';
import { Resume } from '../Pages/Resume/Resume';
import { WhoAmI } from '../Pages/WhoAmI/WhoAmI';
import { Page } from '../types';
import './App.less';

export interface AppStates {
  activePage: number;
  pages: Page[];
}

export interface AppProps {}

export class App extends React.Component<AppProps, AppStates> {
  state = {
    activePage: ACTIVE_PAGE_INDEX,
    pages: [
      {
        icon: <MdMultilineChart/>,
        page: <Resume/>
      },
      {
        icon: <GoMortarBoard/>,
        page: <Education />
      },
      {
        icon: <GoPerson/>,
        page: <WhoAmI />
      },
      {
        icon: <FaBriefcase/>,
        page: <Portfolio/>
      },
      {
        icon: <MdEmail/>,
        page: <Contact />
      }
    ]
  };

  constructor(props: AppProps) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(index: number) {
    this.setState({
      activePage: index
    });
  }

  render() {
    const { pages, activePage } = this.state;
    return (
      <div id="app">
        <div id="portfolio-app">
          <Header/>
          <PageNavigator pages={pages} activePage={activePage} />
          <Navigation pages={pages} activePage={activePage} onClick={this.changePage}/>
        </div>
      </div>
    )
  }
}
