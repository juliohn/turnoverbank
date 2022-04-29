import styled from 'styled-components';

export const Button = styled.button.attrs((props: {background: string}) => props)`
  display:flex;    
  align-items:center;
  justify-content:center;  
  border: 0;
  height: 54px;  
  padding: 0 40px;
  border-radius: 5px;
  white-space: nowrap;
  color: #2799fa;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  gap: 6px;
  margin: 0 10px 0 0;
  border-width: 1px;
  border-style: solid;
  background: ${(props) => props.background ? props.background : '#FFFFFF'};
  border-color: "#BDE0FE";  
`;
