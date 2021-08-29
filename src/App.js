import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Style/css/style.css';
import React, { useEffect } from 'react';
import Main from './Main';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { signInCurrentUser } from './Actions/ActionCreators/User';

export const history = createBrowserHistory();

const App = () => {
  const dispatch = useDispatch();
  const interfaceState = useSelector((state) => state.interface);

  useEffect(() => {
    dispatch(signInCurrentUser());
  }, []);

  return (
    <div className='page-wrapper'>
      <Header />
      <Main />
      {interfaceState.welcomeSkipped && <Footer />}
    </div>
  );
};

export default App;
