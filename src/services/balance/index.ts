
import api from '../api'
import { BalanceProps } from './types';

export const balanceData = async () => {  
  return await api.get<BalanceProps>('balance');     
};