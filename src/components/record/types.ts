import { TransactionProps } from '../../services/balance/types';

export interface RecordProps {  
  item:TransactionProps;
  record_type?:string;
}