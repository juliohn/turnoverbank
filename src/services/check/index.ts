
import api from '../api'
import { CheckProps } from './types';

export const checkData = async () => {  
  return await api.get<CheckProps[]>('check');     
};