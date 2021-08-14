import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SecContent from './components/SecContent/SecContent';
import SecNav from './components/SecNav/SecNav';

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
