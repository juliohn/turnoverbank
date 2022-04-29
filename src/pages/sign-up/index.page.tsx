import Link from 'next/link'
import Head from 'next/head'
import { FormEvent,useState } from 'react'
import OutHeader from '../../components/out-header'

import Swal from 'sweetalert2'

import Router from "next/router";

import { register } from '../../services/users'

import {
  Row,
  Col,
  Box,
  Form,
  Input,
  Button,
  Footer
} from './styles';

export default function SignUp() {

  const [name,setName] = useState<string>();
  const [email,setEmail] = useState<string>();
  const [password,setPassword] = useState<string>();
  

  async function handleSubmit(event:FormEvent){
    event.preventDefault();
    const data = {name, email, password};    
    
    try {
      const response = await register(data);          
      const {message} = response.data  
      
      Swal.fire({
        title: 'Congrats!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(function() {
        Router.push('/sign-in')   
      });

    } catch (error) {

      const {message} = error.response.data      
      Swal.fire({
          title: 'Error!',
          text: message,
          icon: 'error',
          confirmButtonText: 'Ok'
      });
    }

    
  }

  return (
    <>
      <Head>
        <title>Sign Up | BNB Bank</title>
      </Head>   

      <OutHeader/>
      
      <Box>
          <Form onSubmit={handleSubmit}>

            <Row>
              <Col>
              <Input type="text" placeholder='username' value={name} onChange={e => setName(e.target.value)}/>                       
              </Col>
            </Row>

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
                <Button type='submit'>Sign Up</Button>
              </Col>
            </Row>
          
            </Form>

            <Row>
              <Col>
                <Footer>
                  <Link href="/sign-in">
                    <a>Already have an account?</a>
                  </Link>
                </Footer>
              </Col>
            </Row>    
        </Box>
    </>
  )
}
