import React, {useEffect,useState, useCallback} from 'react';
import InHeader from '../../components/in-header';
import Record from '../../components/record';
import Router from "next/router";
import Swal from 'sweetalert2'

import {
  ListG,  
} from './styles';

import { incomesData } from '../../services/income';
import { IncomesProps } from '../../services/income/types';
import FloaterButton from '../../components/buttons/floater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function Income({handleMenu}) {
  const [dataList, setDataList] = useState<IncomesProps[]>();    
    
  const loadData = async () => {
    try {
      const response = await incomesData();
      const incomes = response.data;             
      setDataList(incomes);      
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

  const handleAddIncome = () =>{
    Router.push('/add-income');
  }

  return (
    <>

      <Head>
        <title>Incomes | BNB Bank</title>
      </Head>   
      
      <InHeader title='Incomes' handleMenu={handleMenu}/>           
      <ListG>
          {dataList?.map(function(item){            
            return (<Record key={item.id} item={item} />)
            })} 
      </ListG>

      <a onClick={handleAddIncome}>
        <FloaterButton background="#2799FB">
          <FontAwesomeIcon icon={faPlus} size="2x" color="#FFFFFF"/>
        </FloaterButton>
      </a>
        
    </>
  );
}