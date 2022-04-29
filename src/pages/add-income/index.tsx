/* eslint-disable @next/next/no-img-element */
import 'react-calendar/dist/Calendar.css';
import React, {useEffect,useState, useCallback} from 'react';
import InHeader from '../../components/in-header';
import Router from "next/router";
import Swal from 'sweetalert2'
import { balanceData } from '../../services/balance';
import { ResumeProps } from '../../services/balance/types';

import {Col, Box,Amount,Description,Input,InputMoney, Content, FormItem } from './styles';

import { incomeSaveNew} from '../../services/income';    
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faImage, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../../components/buttons/primary';

export default function AddIncome({handleMenu}) {
  
  const [resume, setResume] = useState<ResumeProps>(); 
  const [amount,setAmount] = useState<string>('0.00');
  const [description,setDescription] = useState<string>('');
  const [file, setFile] = useState<string>()
  
  const loadData = async () => {
    try {
      const response = await balanceData();
      const {resume} = response.data; 
      setResume(resume);      
    } catch (error) {

      const {message} = error.response.data      
      Swal.fire({
          title: 'Error!',
          text: message,
          icon: 'error',
          confirmButtonText: 'Ok'
      });
    }        
  };

  useEffect(() => {            
      loadData();
  },[]);
           

  function handleFile(event: { target: { files: any; }; }) {
    
    let files = event.target.files;
    let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
          setFile(e.target.result);
        };
  }

  const handleSave = useCallback(async () => {
    try {
      
         const data = {
           amount:amount.replace("$",""),
           description:description,
           image_path:file
          };          
          const response = await incomeSaveNew(data);          
          const { message } = response.data;
          
          Swal.fire({
              title: 'Congrats!',
              text: message,
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then(function() {

              Router.push('/income')   
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
  }, [amount,description,file]);
  
  return (
    <>

      <Head>
        <title>Add Income | BNB Bank</title>
      </Head>
      
      <InHeader title='Add Income' handleMenu={handleMenu}/>

      <Box background={'#BDE0FE'} color="#fff">
        <Col>
          <Description>
            Current balance
          </Description>
          <Amount fontSize="32px">
            {resume?.current ? resume?.current : '- - - - -'}
          </Amount>
        </Col>        
      </Box>

      <Content>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faMoneyBill} size="lg" />
            Amount
          </label>
          <InputMoney thousandSeparator={false}  decimalScale={2} allowNegative={false}  fixedDecimalScale decimalSeparator={"."} prefix={'$'} placeholder='amount' value={amount} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setAmount(e.target.value)}/>   
        </FormItem>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faStar} size="lg" />
            Description
          </label>
          <Input placeholder='add description' value={description} onChange={e => setDescription(e.target.value)}/>  
        </FormItem>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faImage} size="lg" />
            Check Image
          </label>
          <Input type="file" onChange={handleFile}/>
        </FormItem>

        {file &&
          <FormItem>
            <label htmlFor="amount">
              <FontAwesomeIcon icon={faImage} size="lg" />
              Preview Check Image
            </label>
            <img src={file} alt="Check" />
          </FormItem>
        }
                
        <a onClick={handleSave}>
          <PrimaryButton background={"#2799fa"}>
            <FontAwesomeIcon icon={faCheckCircle} color="#FFFFFF"/>
            Add Income
          </PrimaryButton>
        </a>

      </Content>  

    </>
  );
}