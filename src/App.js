import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SecContent from './components/SecContent/SecContent';
import SecMessages from './components/SecMessages/SecMessages';
import SecNav from './components/SecNav/SecNav';
import { BrowserRouter, Route } from "react-router-dom";
import SecNewsfeed from './components/SecNewsfeed/SecNewsfeed';
import SecGroups from './components/SecGroups/SecGroups';

const App = (props) => {
  const state = props.state;
  const dispatch = props.dispatch;
  const store = props.store;
  // debugger;
  return (
    <BrowserRouter>
      <div className='appWrapper' >
        <Header
          state={state.headerPart}
        />
        {/* <Nav /> */}
        <SecNav
          state={state.secNavPart}
        />
        <div className="contentWrapper">
          <Route
            path='/profile'
            render={() => <SecContent
              state={state.profilePage}
            />} />
          <Route
            path='/messages'
            render={() => <SecMessages
              state={state.messagesPage}
            />} />
          <Route
            path='/newsfeed'
            render={() => <SecNewsfeed
              state={state.newsfeedPage}
              dispatch={dispatch}
            />} />
          <Route
            path='/groups'
            render={() => <SecGroups
              state={state.groupsPage}
            />} />
        </div>
        <Footer
          state={state.footerPart}
          dispatch={dispatch} />
        {/* {window.addEventListener('scroll', setClass)} */}
      </div>
    </BrowserRouter>);
}

export default App;
