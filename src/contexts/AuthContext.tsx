
import { createContext, useEffect, useState } from "react";

import Swal from 'sweetalert2'

import {parseCookies, setCookie, destroyCookie} from  'nookies';

import Router from "next/router";

import api from '../services/api';

import { AuthContextData, SignCredentials, AuthProviderProps, UserSignProps} from "./types";

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps){
  const [user,setUser] = useState<UserSignProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    
    const {'tbnb.access_token':access_token} = parseCookies();        
  
    const {'tbnb.current_user':current_user} = parseCookies(); 
    if(current_user){       
      setUser(JSON.parse(current_user));
    }else{
      setUser(null);
    }
        
    if(!access_token){      
      Router.push('/sign-in');
    }
    
  },[]);

  async function signIn({email,password}:SignCredentials){
    
    try {
      const response = await api.post('auth/logar',{email,password});

      const {access_token} = response.data;      
      
      setCookie(undefined,'tbnb.access_token',access_token,{
        maxAge: 60 * 60 * 24 * 30,
        path:'/'
      })      

      setCookie(undefined,'tbnb.current_user',JSON.stringify(response.data.user),{
        maxAge: 60 * 60 * 24 * 30,
        path:'/'
      })      

      setUser(response.data.user);

      api.defaults.headers['Authorization'] = `Bearer ${access_token}`

      if(response.data.user.role === 'A'){
        Router.push('/check')      
      }else{
        Router.push('/balance')      
      }
      
    } catch (error) {      

      Swal.fire({
            title: 'Error!',
            text: 'Invalid access data ',
            icon: 'error',
            confirmButtonText: 'Ok'
      });
    }
    
  }

  async function signOut(){
    
    try {
      
      destroyCookie(null, 'tbnb.current_user');
      destroyCookie(null, 'tbnb.access_token');
      setUser(null);

      api.defaults.headers['Authorization'] = `Bearer ${null}`

      Router.push('/sign-in');
      
    } catch (error) {      

      Swal.fire({
            title: 'Error!',
            text: 'Invalid access data ',
            icon: 'error',
            confirmButtonText: 'Ok'
      });
    }
    
  }
  

  return (<AuthContext.Provider value={{signIn,isAuthenticated,signOut}}>
    {children}
  </AuthContext.Provider>)
}