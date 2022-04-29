import 'react-calendar/dist/Calendar.css';
import React, {useEffect,useState, useCallback} from 'react';
import InHeader from '../../components/in-header';
import Router from "next/router";
import Calendar from 'react-calendar';
import Swal from 'sweetalert2'
import { balanceData } from '../../services/balance';
import { ResumeProps } from '../../services/balance/types';

import { Row, Col, Box,Amount,Description,Input,InputMoney, Content, FormItem } from './styles';

import { expenseSaveNew} from '../../services/expense';    
import Head from 'next/head';
import PrimaryButton from '../../components/buttons/primary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCheckCircle, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons';

export default function AddExpense({handleMenu}) {
  
  const [resume, setResume] = useState<ResumeProps>(); 
  
  const [amount,setAmount] = useState<string>('0.00');
  const [description,setDescription] = useState<string>('');
  const [date,setDate] = useState<Date>(new Date());

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
           
  const handleSave = useCallback(async () => {
    try {
      
         const data = {
           'amount':amount.replace("$",""),
           'description':description,
           'date': new Intl.DateTimeFormat(
             'en-CA', 
              {
                year: "numeric", 
                month: "2-digit",                                 
                day: "2-digit"
              }).format(date)
          };

          const response = await expenseSaveNew(data);          
          const { message } = response.data;

          Swal.fire({
              title: 'Congrats!',
              text: message,
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then(function() {
              Router.push('/expense')   
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
  }, [amount,description,date]);
  
  return (
    <>

      <Head>
        <title>Add Expense | BNB Bank</title>
      </Head>

      <InHeader title='Add Expense' handleMenu={handleMenu}/>

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
          <InputMoney thousandSeparator={false}  decimalScale={2} allowNegative={false}  fixedDecimalScale decimalSeparator={"."} prefix={'$'} placeholder='amount' value={amount} onChange={e => setAmount(e.target.value)}/>  
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
            <FontAwesomeIcon icon={faCalendar} size="lg" />
            Date
          </label>          
          <Calendar onChange={setDate} value={date} />
        </FormItem>
              
        <a onClick={handleSave}>
          <PrimaryButton background={"#2799fa"}>
            <>
              <FontAwesomeIcon icon={faCheckCircle} color="#FFFFFF"/>
              Add Expense
            </>
          </PrimaryButton>
        </a>

      </Content>

    </>
  );
}