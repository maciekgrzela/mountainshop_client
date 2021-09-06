import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Style/css/style.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.min.css';
import React, { useEffect } from 'react';
import Main from './Main';
import { useDispatch, useSelector } from 'react-redux';
import { signInCurrentUser } from './Actions/ActionCreators/User';

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
