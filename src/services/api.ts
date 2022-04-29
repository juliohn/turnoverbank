import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();


const api = axios.create({  
  baseURL: "https://turnoverbnb.ajotadigital.com.br/api/",
  headers:{
    Authorization:`Bearer ${cookies['tbnb.access_token']}`
  }
});

export default api;