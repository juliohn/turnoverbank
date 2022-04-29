import { ReactNode } from "react";

export type SignCredentials = {
  email:string,
  password:string
}


export type AuthContextData = {
  signIn(credentials:SignCredentials):Promise<void>;
  isAuthenticated:boolean,
  signOut():Promise<void>;
}

export type AuthProviderProps = {
  children:ReactNode;
}

export type UserSignProps = {    
    id:number,
    name:string,
    email:string,
    role?:string  
}

