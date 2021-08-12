import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import SecContent from './components/SecContent';
import SecNav from './components/SecNav';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      {/* <Nav /> */}
      <SecNav />
      <SecContent />
      <Footer />
    </div>);
}

export default App;
