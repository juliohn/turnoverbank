import { TransactionProps } from '../../services/balance/types';

export interface ExpenseProps extends TransactionProps {};

export type NewExpenseProps = {
  amount:string,
  description:string,
  date:string
};

