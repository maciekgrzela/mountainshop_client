import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Style/css/style.css';
import React from 'react';
import Main from './Main';

const App = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
