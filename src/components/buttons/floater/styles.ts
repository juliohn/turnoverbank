import styled from 'styled-components';

export const Button = styled.button.attrs((props: {background: string}) => props)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display:flex;    
  align-items:center;
  justify-content:center;  
  border: 0;
  height: 58px;  
  width: 58px;  
  padding: 0;
  border-radius: 100px;
  background-color: ${(props) => props.background ? props.background : '#000000'};  
`;
