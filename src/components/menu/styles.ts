
import styled from 'styled-components';

export const Nav = styled.div.attrs((props: {open: boolean}) => props)`
  padding:10px;
  width: ${(props) => props.open ? '230px' : '70px'};
  background-color:#2799fb ;
  min-height: 100vh;
  height: 100%;
  overflow:hidden ;
  z-index: 999;
  position: relative;
  transition: all 150ms;
  span {
    display: ${(props) => props.open ? 'flex' : 'none'};
  }
  @media screen and (max-width: 680px) {
    position: fixed;
    top: 0;
    left: ${(props) => props.open ? '0' : '-110%'};
    overflow: visible;
  }
`;

export const MenuList = styled.ul``
export const MenuItem = styled.li`

  font-size: 14px ;
  font-weight: 700;
  color:#ffffff;
  a {
    display:flex;
    align-items:center;
    gap:10px;
    padding: 20px 0; 
    cursor:pointer ;
  }
  a:hover {
    background: rgba(255,255,255,.1);
    filter: opacity(70%);
  }

  svg {
    width:50px;
  }
  
`