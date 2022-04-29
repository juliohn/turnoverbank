
import styled from 'styled-components';
import { Row, Col, InputGlobal } from '../../components/globals/styles';
export const RowG = styled(Row)``;
export const ColG = styled(Col)``;
export const Input = styled(InputGlobal)``; 

export const FormItem = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 0 40px 0;
  label {
    display:flex;
    align-items: center;
    gap: 20px;
    color: #C3E3FF;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
  input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    padding: 0 42px;
    outline: 0;
    margin: 0 auto;
    &[type="file"] {
      padding: 15px 38px;
      font-size: 14px;
    }
    &:focus {
      border-color: #2799fa;
    }
  }
  .react-calendar {
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
    border-color: #C3E3FF;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      font-size: 14px;
    }
  }
  img {
    border: 2px solid #C3E3FF;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0 0 0;
    width: 40%;
    height: auto;
  }
`;
