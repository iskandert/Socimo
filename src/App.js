import './App.css';
import Header from './components/Header';
import Profile from './components/Main';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>);
}

export default App;
