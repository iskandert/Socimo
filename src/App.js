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
  const dispatch = props.dispatch;
  // debugger;
  return (
    <BrowserRouter>
      <div className='appWrapper' >
        <Header
          state={state.headerPart}
          dispatch={dispatch} />
        {/* <Nav /> */}
        <SecNav
          state={state.secNavPart}
          dispatch={dispatch} />
        <div className="contentWrapper">
          <Route
            path='/profile'
            render={() => <SecContent
              state={state.profilePage}
              dispatch={dispatch}
            />} />
          <Route
            path='/messages'
            render={() => <SecMessages
              state={state.messagesPage}
              dispatch={dispatch}
              addFrase={props.store}
            />} />
          <Route
            path='/newsfeed'
            render={() => <SecNewsfeed
              state={state.newsfeedPage}
              dispatch={dispatch}
            />} />
          {/* <SecNewsfeed /> */}
          {/* <SecContent /> */}
          {/* <SecMessages /> */}
        </div>
        <Footer
          state={state.footerPart}
          dispatch={dispatch} />
        {/* {window.addEventListener('scroll', setClass)} */}
      </div>
    </BrowserRouter>);
}

export default App;
