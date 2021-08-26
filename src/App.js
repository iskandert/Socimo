import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SecContent from './components/SecContent/SecContent';
import SecMessages from './components/SecMessages/SecMessages';
import SecNav from './components/SecNav/SecNav';
import { BrowserRouter, Route } from "react-router-dom";
import SecNewsfeed from './components/SecNewsfeed/SecNewsfeed';

const App = (props) => {
  const state = props.state;
  return (
    <BrowserRouter>
      <div className='appWrapper' >
        <Header state={state.headerPart} />
        {/* <Nav /> */}
        <SecNav state={state.secNavPart} />
        <div className="contentWrapper">
          <Route
            path='/profile'
            render={() => <SecContent state={state.profilePage} />} />
          <Route
            path='/messages'
            render={() => <SecMessages
              state={state.messagesPage}
              addFrase={props.addFrase} />} />
          <Route
            path='/newsfeed'
            render={() => <SecNewsfeed state={state.newsfeedPage} />} />
          {/* <SecNewsfeed /> */}
          {/* <SecContent /> */}
          {/* <SecMessages /> */}
        </div>
        <Footer state={state.footerPart} />
        {/* {window.addEventListener('scroll', setClass)} */}
      </div>
    </BrowserRouter>);
}

export default App;
