import { TransactionProps } from '../../services/balance/types';

export interface IncomesProps extends TransactionProps {}

export type NewIncomeProps = {
  amount:string,
  description:string,
  image_path:string
};