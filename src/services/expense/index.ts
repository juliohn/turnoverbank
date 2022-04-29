
import api from '../api'
import { ExpenseProps,NewExpenseProps } from './types';

export const expenseData = async () => {  
  return await api.get<ExpenseProps[]>('expense');     
};

export const expenseSaveNew = async (data:NewExpenseProps) => {    
  return await api.post('expense',data);     
};