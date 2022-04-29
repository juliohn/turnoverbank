import React, {useEffect,useState, useRef} from 'react';
import InHeader from '../../components/in-header';
import Record from '../../components/record';
import Router from "next/router";
import Swal from 'sweetalert2'

import { ListG} from './styles';

import { expenseData } from '../../services/expense';
import { ExpenseProps } from '../../services/expense/types';

import FloaterButton from '../../components/buttons/floater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function Expense({handleMenu}) {
  const [dataList, setDataList] = useState<ExpenseProps[]>();    
  
  useEffect(() => {            
    loadData();
  },[])

  async function loadData(){
    try {
      const response = await expenseData();
      const expenses = response.data;             
      setDataList(expenses);      
    } catch (error) {
      console.log(error);
    }        
  }

  const handleAddExpense = () =>{
    Router.push('/add-expense');
  }
  
  return (
    <>

      <Head>
        <title>Expenses | BNB Bank</title>
      </Head>   

      <InHeader title='Expenses' handleMenu={handleMenu}/>           
      <ListG>
          {
            dataList?.map(function(item){            
            return (
                    <Record key={item.id} item={item} />
                  )
            })
          } 
      </ListG>   

      <a onClick={handleAddExpense}>
        <FloaterButton background="#2799FB">
          <FontAwesomeIcon icon={faPlus} size="2x" color="#FFFFFF"/>
        </FloaterButton>
      </a>

    </>
  );
}