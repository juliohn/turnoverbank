
import api from '../api'
import { IncomesProps,NewIncomeProps} from './types';

export const incomesData = async () => {  
  return await api.get<IncomesProps[]>('check-incomes');     
};

export const incomeSaveNew = async (data:NewIncomeProps) => {    
   return await api.post("check",data);
};