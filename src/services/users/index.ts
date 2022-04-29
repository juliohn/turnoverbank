
import api from '../api'
import { UserRegistration } from './types';

export const register = async (user: UserRegistration) => {  
    return await api.post('user',user);                          
};