import Link from 'next/link'
import {
  RowG,
  ColG,
  Box,
  Description,
  Status,
  Date,
  Amount
} from './styles';
import { RecordProps } from './types';


export default function Record({item,record_type='description'}:RecordProps) {  

  return (
  <Box>               
      <RowG>
        <ColG>            
            <Description>
              {record_type === 'description' ? item.description : item.account.user.name}
              {(item.type === 'C' && item.status === 'P') && <Status>{item.status_show}</Status>}    
            </Description>                      
            <Date>{item.created_show}</Date>
        </ColG>
        
        <ColG flex="0">
           <Amount type={item.type}> {item.type === 'E' ? '-':null} {item.amount_show}</Amount>
        </ColG>
      </RowG>                     
  </Box>
  )
}
