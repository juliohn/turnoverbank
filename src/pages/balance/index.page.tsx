import React, {useEffect,useState, useRef} from 'react';
import InHeader from '../../components/in-header';
import Record from '../../components/record';
import Link from 'next/link'

import {
  ListG,
  ColG,
  RowG,
  Box,
  Description,
  Amount
} from './styles';

import { balanceData } from '../../services/balance';
import { ResumeProps,TransactionProps } from '../../services/balance/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2'
import Head from 'next/head';

export default function Balance({handleMenu}) {
  const [dataList, setDataList] = useState<TransactionProps[]>();  
  const [resume, setResume] = useState<ResumeProps>();      

  const loadData = async () => {
    try {
      const response = await balanceData();
      const {transactions,resume} = response.data; 
      setResume(resume);
      setDataList(transactions);  
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
  },[])
  
  return (
    <>

      <Head>
        <title>Balance | BNB Bank</title>
      </Head>

      <InHeader title='BNB Bank' handleMenu={handleMenu}/>
      
      <Box background={'#BDE0FE'} color="#fff">
        <ColG>
          <Description>
            Current balance
          </Description>
          <Amount fontSize="32px">
            {resume?.current ? resume?.current : '- - - - -'}
          </Amount>
        </ColG>        
      </Box>
      <Box background={'#DAEFFF'}>
        <ColG>
          <Description>
            Incomes
          </Description>
          <Amount>
            {resume?.check ? resume?.check : '- - - - -'}
          </Amount>
        </ColG>
        <ColG flex="0">        
          <Link href="/add-income">
            <a>
              <FontAwesomeIcon size='2x' icon={faPlus} color="#2799FB"/>
              Deposit a Check
            </a>      
          </Link>                                    
        </ColG>
        
      </Box>
      <Box background={'#F1F9FE'}>
        <ColG>
          <Description>
            Expenses
          </Description>
          <Amount>
          {resume?.expense ? resume?.expense : '- - - - -'}
          </Amount>
        </ColG>
        <ColG flex="0">        
          <Link href="/add-expense">
            <a>
              <FontAwesomeIcon size='2x' icon={faPlus} color="#2799FB"/>
              Add Expense
            </a>      
          </Link>                                    
        </ColG>
      </Box>
      <ListG>
          {dataList?.map(function(item){            
              return (
                      <Record key={item.id} item={item} />                   
                    )
            })
          } 
      </ListG>         
    </>
  );
}