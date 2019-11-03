import React from 'react';
import './App.css';
import '../Assets/Styles/ReactSlick.css'
import {WhoAmI} from "../Pages/WhoAmI/WhoAmI";
import {Contact} from "../Pages/Contact/Contact";
import {Header} from "../Components/Header/Header";
import {PageNavigator} from "../Components/PageNavigator/PageNavigator";
import {Navigation} from "../Components/Navigation/Navigation";
import {GoPerson, GoMortarBoard} from 'react-icons/go'
import {FaBriefcase} from 'react-icons/fa'
import {MdEmail, MdMultilineChart} from 'react-icons/md'
import {Resume} from "../Pages/Resume/Resume";

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

  constructor(props){
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(index) {
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
