

import styled from 'styled-components';
import { RowGlobal, ColGlobal} from '../../components/globals/styles';

export const Row = styled(RowGlobal)``;
export const Col = styled(ColGlobal)``;
export const Form = styled.form``;

export const Box = styled.div`
  margin: 40px auto;
  width: 100%;  
  position: relative;
  max-width:450px ;
  padding: 0 40px ;
`;

export const Input = styled.input`
  margin: 10px auto;
  width: 100%;      
  border: 1px solid #bde0fe;
  height: 55px;
  border-radius:100px;
  padding:0 25px ;
  color:  #2799fb;
  font-weight:600 ;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #bde0fe;
  }
  :-ms-input-placeholder {
     color: #bde0fe;
  }
  :focus {
    border-color:#2799fb ;
  }
`;

export const Button = styled.button`
  display:flex;
  margin: 10px auto;
  width: 100%;      
  border: 0;
  height: 55px;
  border-radius:100px;
  padding:0 25px ;
  background-color:  #2799fb;
  color:#ffffff;
  font-weight:600 ;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;  
`;


export const Footer = styled.div`
  text-align:center ;
  margin:50px auto ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;  
  a {
    color: #2799fb ;
  } 

  ::before {
    content: '';
    border-radius:100px;
    margin-bottom:25px ;
    width: 30px ;
    height:6px ;
    background-color:#bde0fe ;
    display:inline-block ;
  }
`;
