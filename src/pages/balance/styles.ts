
import styled from 'styled-components';
import {Row,Col,List } from '../../components/globals/styles';



export const ListG = styled(List)``;
export const RowG = styled(Row)``;
export const ColG = styled(Col)``;

export const Box = styled(Row).attrs((props: {background: string,color:string}) => props)`

  margin: 0 auto;
  width: 100%;    
  padding: 20px 34px;
  border-bottom: 1px solid #daf0ff ;  
  color: ${(props) => props.color  ? props.color  : '#2799fa'};  
  background: ${(props) => props.background  ? props.background  : '#ffffff'};  

  a {
    display:flex;
    flex-direction: column;
    align-items:center ;
    justify-content:center ;
    color: #2799fa; 
    font-size:12px ;
    text-transform:uppercase;
    white-space:nowrap;
    gap:8px;
    width:100px;
    
    &:hover{
      filter:opacity(70%)
    }
  }
`;

export const Description = styled.div`
  font-weight:700;
  font-size:16px;
  margin-bottom:5px
`;

export const Amount = styled.div.attrs((props: {fontSize:string}) => props)`
  white-space  :nowrap ;
  font-weight:400;
  font-size:${(props) => props.fontSize ? props.fontSize : '22px'};  
`;