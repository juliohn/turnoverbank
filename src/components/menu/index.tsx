
import Link from 'next/link'
import Router from "next/router";
import { AuthContext } from '../../contexts/AuthContext'

import {isMobile} from 'react-device-detect';

import {useContext, useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faScaleUnbalancedFlip,faTurnUp,faTurnDown,faMoneyCheckDollar,faBell, faUser, faGear, faCircle, faCircleQuestion, faSignOut } from '@fortawesome/free-solid-svg-icons';

import {parseCookies,destroyCookie} from  'nookies';

import { MenuProps } from './types';

import { Nav,MenuList,MenuItem } from './styles';

export default function Menu({openMenu, handleToggleMenu}:MenuProps) {
  
  const {isAuthenticated,signOut} = useContext(AuthContext);

  let user = {role:'N'};
  if(isAuthenticated){
    const {'tbnb.current_user':current_user} = parseCookies(); 
    user = JSON.parse(current_user);
  }

  const handleMenuToggle = () =>{
    if( isMobile ) {
      handleToggleMenu();
    }
  };

  const handleLogout = () =>{
    signOut();
  };
    
  return isAuthenticated ? (
  <Nav open={openMenu}>    
    <MenuList onClick={handleMenuToggle}>

      {user.role === 'C' ? (
        <>
          <MenuItem>
            <Link href="/balance">
              <a>
                <FontAwesomeIcon size='lg' icon={faScaleUnbalancedFlip} color="#93CCFD"/>
                <span>BALANCE</span>
              </a>      
            </Link>
          </MenuItem>
          <MenuItem>
          <Link href="/income">
              <a>
                <FontAwesomeIcon size='lg' icon={faTurnUp} color="#93CCFD"/>
                <span>INCOMES</span>
              </a>      
            </Link>
          </MenuItem>
          <MenuItem>
          <Link href="/expense">
              <a>
                <FontAwesomeIcon size='lg' icon={faTurnDown} color="#93CCFD"/>
                <span>EXPENSES</span>
              </a>      
            </Link>
          </MenuItem>
        </>
        ):(
          <MenuItem>
          <Link href="/check">
              <a>
                <FontAwesomeIcon size='lg' icon={faMoneyCheckDollar} color="#93CCFD"/>
                <span>CHECKS</span>
              </a>      
            </Link>
          </MenuItem>
        )}
        <MenuItem>
        <Link href="/soon">
            <a>
              <FontAwesomeIcon size='lg' icon={faBell} color="#93CCFD"/>
              <span>NOTIFICATIONS</span>
            </a>      
          </Link>
        </MenuItem>
        <MenuItem>
        <Link href="/soon">
            <a>
              <FontAwesomeIcon size='lg' icon={faUser} color="#93CCFD"/>
              <span>PROFILE</span>
            </a>      
          </Link>
        </MenuItem>
        <MenuItem>
        <Link href="/soon">
            <a>
              <FontAwesomeIcon size='lg' icon={faGear} color="#93CCFD"/>
              <span>SETTINGS</span>
            </a>      
          </Link>
        </MenuItem>
        <MenuItem>
        <Link href="/soon">
            <a>
              <FontAwesomeIcon size='lg' icon={faCircleQuestion} color="#93CCFD"/>
              <span>HELP</span>
            </a>      
          </Link>
        </MenuItem>
        <MenuItem>
            <a onClick={handleLogout}>
              <FontAwesomeIcon size='lg' icon={faSignOut} color="#93CCFD"/>
              <span>SAIR</span>
            </a>      
        </MenuItem>

      </MenuList>
    
  </Nav>
  ):null
}
