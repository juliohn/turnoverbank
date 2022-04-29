import '../styles/globals.css'
import { AuthProvider } from '../contexts/AuthContext'
import {useEffect, useState} from 'react'

import {isMobile} from 'react-device-detect';

import type { AppProps } from 'next/app'
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons';

import Menu from '../components/menu';

function MyApp({ Component, pageProps }: AppProps) {

  const [openMenu,setOpenMenu] = useState<boolean>(!isMobile);
  function handleToggleMenu(){    
    setOpenMenu(!openMenu) 
  }  
  // useEffect(() => {
  //   if(isMobile) {
  //     // menu on click
  //     handleToggleMenu();
  //   }
  // }, []);

  // console.log("isMobile", isMobile);
  // console.log("openMenu", openMenu);

  return (
    <AuthProvider>  
      
      <div className='row align-stretch'>      
            
        <div className='col flex0'>
          <Menu openMenu={openMenu} handleToggleMenu={handleToggleMenu} />
          <div className={ openMenu ? 'closeMenu open' + (isMobile && ' a') : 'closeMenu' } onClick={handleToggleMenu} />
        </div>
        
        <div className='col'>
        <Component {...pageProps} handleMenu={handleToggleMenu} />
        </div>                  
        
      </div>    
    
    </AuthProvider>
  )
}

export default MyApp
