// eslint-disable-next-line no-unused-vars
import { React, useState} from 'react'
import { Outlet} from 'react-router-dom';
import styles from './style';
import Navbar from './components/HomeNavbar';
import Footer from './components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(0);
  const handleLoggedIn = (heroLog) => {
    setLoggedIn(heroLog);
  }
  return( 
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}` }>
      <div className={`${styles.boxwidth}`}>
        <Navbar logIn= {loggedIn} onloggedIn={handleLoggedIn}/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxwidth}`}>
        <Outlet />
        <Footer/>
      </div>
    </div>
  </div>
  )
};


export default App