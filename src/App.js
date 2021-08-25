import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Style/css/style.css';
import React from 'react';
import Main from './Main';
import { useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const App = () => {
  const interfaceState = useSelector((state) => state.interface);

  return (
    <div className='page-wrapper'>
      <Header />
      <Main />
      {interfaceState.welcomeSkipped && <Footer />}
    </div>
  );
};

export default App;
