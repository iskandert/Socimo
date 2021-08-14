import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SecContent from './components/SecContent/SecContent';
import SecMessages from './components/SecMessages/SecMessages';
import SecNav from './components/SecNav/SecNav';
import { BrowserRouter, Route } from "react-router-dom";
import SecNewsfeed from './components/SecNewsfeed/SecNewsfeed';

const App = () => {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        {/* <Nav /> */}
        <SecNav />
        <div className="contentWrapper">
          <Route path='/profile' component={SecContent} />
          <Route path='/messages' component={SecMessages} />
          <Route path='/newsfeed' component={SecNewsfeed} />
          {/* <SecNewsfeed /> */}
          {/* <SecContent /> */}
          {/* <SecMessages /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>);
}

export default App;
