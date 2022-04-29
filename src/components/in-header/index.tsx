

import {
  Container,  
  Title,
  Button,
  Row
} from './styles';


import {HeaderInProps} from './types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons';

export default function InHeader({title,handleMenu}:HeaderInProps) {  
  
  function handleToggleMenu(){
    handleMenu();
  }

  return (
  <Container>
    <Row className='row'>    
      <Button onClick={() =>{handleToggleMenu()}}>
        <FontAwesomeIcon icon={faBars} size="lg" color="#2799FB"/>
      </Button>          
      <Title>{title}</Title>
    </Row>

    
  </Container>
  )
}
