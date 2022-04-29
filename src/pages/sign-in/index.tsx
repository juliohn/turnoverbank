import Link from 'next/link'
import Head from 'next/head'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import OutHeader from '../../components/out-header'


import {
  Row,
  Col,
  Form,
  Box,  
  Input,
  Button,
  Footer  
} from './styles';


export default function SignIn() {

  const [email,setEmail] = useState('juliohn@gmail.com');
  
  const [password,setPassword] = useState('123456');

  const {signIn} = useContext(AuthContext);

  function handleSubmit(event:FormEvent){
    event.preventDefault();
    const data = {
      email,password
    }
    signIn(data);    
  }

return (
    <>
      <Head>
        <title>Sign In | BNB Bank</title>
      </Head>   
      <OutHeader/>
      <Box>
          <Form onSubmit={handleSubmit}>

              <Row>
                <Col>
                  <Input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>  
                </Col>
              </Row>
                
              <Row>
                <Col>
                  <Input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>                       
              
                </Col>
                </Row>

              
                
              <Row>
                <Col>
                  <Button type='submit'>Sign In</Button>
                </Col>
              </Row>
            
            
            </Form>

            <Row>
              <Col>
                <Footer>
                  <Link href="/sign-up">
                    <a>Not have an account yet?</a>      
                  </Link>
                </Footer>
                </Col>
              </Row>
            
        </Box>
    </>
  )
}
