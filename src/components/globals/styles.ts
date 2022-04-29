
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';


export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Col = styled.div.attrs((props: {flex: string}) => props)`       
  flex: ${(props) => props.flex ? props.flex : 1};
`;

export const List = styled.div`
  height:100% ;
  padding:20px 30px ;
  @media screen and (max-width: 680px) {
    padding: 10px 20px ;
  }
`;


export const RowGlobal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ColGlobal = styled.div.attrs((props: {flex: string}) => props)`       
  flex: ${(props) => props.flex ? props.flex : 1};
`;

export const ListGlobal = styled.div`
  height:100% ;
  padding:20px 30px ;
  @media screen and (max-width: 680px) {
    padding: 10px 20px ;
  }
`;

export const ContentGlobal = styled.div`
  padding: 30px;
  min-height: 80vh;
  overflow: hidden;
  @media screen and (max-width: 680px) {
    padding: 20px ;
  }
`;

export const InputGlobal = styled.input`
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


export const InputMaskGlobal = styled(CurrencyFormat)`
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
   