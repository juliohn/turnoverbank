import React, {useEffect,useState, useRef} from 'react';
import InHeader from '../../components/in-header';
import Record from '../../components/record';
import Link from 'next/link'

import {
  ListG,  
} from './styles';

import { checkData } from '../../services/check';
import { CheckProps } from '../../services/check/types';

export default function Check({handleMenu}) {
  const [dataList, setDataList] = useState<CheckProps[]>();    
  
  
  useEffect(() => {            
    loadData();
  },[])

  async function loadData(){
    try {
      const response = await checkData();
      const checks = response.data;
      setDataList(checks);      
    } catch (error) {
      console.log(error);
    }        
  }
  
  return (
    <>
      <InHeader title='Check Control' handleMenu={handleMenu}/>           
      <ListG>
          {dataList?.map(function(item){            
            return (
              <Link key={item.id} href={{ pathname: '/check-detail', query: { id: item.id } }}>
                <a>
                  <Record  item={item} record_type='user' />
                </a>
              </Link>)
            })} 
      </ListG>         
    </>
  );
}