
import styled from 'styled-components';
import {RowGlobal,ColGlobal } from '../globals/styles';


export const Row = styled(RowGlobal)``;
export const Col = styled(ColGlobal)``;
export const Box = styled.div`
  margin: 0 auto;
  width: 100%;    
  padding: 15px 4px;
  border-bottom: 1px solid #daf0ff ;
  color:#2799fa ;
`;

export const Description = styled.div`
  font-weight:700;
  font-size:16px;
  margin-bottom:5px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Status = styled.div`
  font-weight:400;
  font-size:10px;
  background: #EA2709;
  color: #fff;
  margin-left: 8px;
  padding: 2px 4px;
  border-radius: 4px;
`;

export const Date = styled.div`
  font-weight:400;
  font-size:14px;
`;

export const Amount = styled.div.attrs((props: {type: string}) => props)`
  white-space  :nowrap ;
  font-weight:400;
  font-size:18px;
  margin-bottom:8px;
  color: ${(props) => props.type === 'E' ? '#EA2709' : '#2799FB'};  
`;