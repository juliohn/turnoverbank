
import api from '../api'
import { CheckDetailProps } from './types';

export const checkDetailData = async (id: string | string[]) => {  
  return await api.get<CheckDetailProps>(`check/${id}`);     
};

export const checkDetailUpdate = async (id: string | string[],status:string) => {  
  return await api.put(`check/${id}`,{
    status
  });     
};