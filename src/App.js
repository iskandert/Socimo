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
  const data = props.data;
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header data={props.data} />
        {/* <Nav /> */}
        <SecNav data={props.data} />
        <div className="contentWrapper">
          <Route
            path='/profile'
            render={() => <SecContent data={props.data} />} />
          <Route
            path='/messages'
            render={() => <SecMessages data={props.data} />} />
          <Route
            path='/newsfeed'
            render={() => <SecNewsfeed data={props.data} />} />
          {/* <SecNewsfeed /> */}
          {/* <SecContent /> */}
          {/* <SecMessages /> */}
        </div>
        <Footer data={props.data} />
      </div>
    </BrowserRouter>);
}

export default App;
