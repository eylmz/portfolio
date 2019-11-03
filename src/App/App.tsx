import * as React from 'react';
import { FaBriefcase } from 'react-icons/fa'
import { GoMortarBoard, GoPerson } from 'react-icons/go'
import { MdEmail, MdMultilineChart } from 'react-icons/md'
import '../Assets/Styles/ReactSlick.css'
import { Header } from '../Components/Header/Header';
import { Navigation } from '../Components/Navigation/Navigation';
import { PageNavigator } from '../Components/PageNavigator/PageNavigator';
import { Contact } from '../Pages/Contact/Contact';
import { Resume } from '../Pages/Resume/Resume';
import { WhoAmI } from '../Pages/WhoAmI/WhoAmI';
import './App.less';

export class App extends React.Component {
  state = {
    activePage: 0,
    pages: [
      {
        icon: <MdMultilineChart/>,
        page: <Resume/>
      },
      {
        icon: <GoMortarBoard/>,
        page: <WhoAmI />
      },
      {
        icon: <GoPerson/>,
        page: <WhoAmI />
      },
      {
        icon: <FaBriefcase/>,
        page: <WhoAmI/>
      },
      {
        icon: <MdEmail/>,
        page: <Contact />
      }
    ]
  };

  constructor(props: any) {
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
        <div id="portfolio">
          <Header/>
          <PageNavigator pages={pages} activePage={activePage} />
          <Navigation pages={pages} activePage={activePage} onClick={this.changePage}/>
        </div>
      </div>
    )
  }
}
