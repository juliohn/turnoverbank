import React, {useEffect,useState, useCallback} from 'react';
import InHeader from '../../components/in-header';
import Router from "next/router";

import { RowG, ColG, FormItem, Input } from './styles';

import { useRouter } from 'next/router'

import { checkDetailData , checkDetailUpdate} from '../../services/check-detail';
import { CheckDetailProps } from '../../services/check-detail/types'; 

import Swal from 'sweetalert2'
import { Content } from '../add-expense/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEnvelope, faFileAlt, faImage, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../../components/buttons/primary';
import SecondaryButton from '../../components/buttons/secondary';
    
export default function CheckDetails({handleMenu}) {
  
  const router = useRouter();

  const { id } = router.query;

  const [detail, setDetail] = useState<CheckDetailProps>();    
    
  const loadData = useCallback(async () => {
    try {
      const response = await checkDetailData(id);

      setDetail(response.data);
    } catch (error) {

      const {message} = error.response.data      
      Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Ok'
      });
    }    

  }, [id]);

  useEffect(() => {            
    loadData();
  },[loadData])

  const handleUpdate = useCallback(async (status:string) => {
    try {
      const response = await checkDetailUpdate(id,status);

      const { message } = response.data;

      Swal.fire({
        title: 'Congrats!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(function() {
        Router.push('/check')   
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

  }, [id]);


  
  return (
    <>
      <InHeader title='Check Details' handleMenu={handleMenu}/>

      <Content>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faUser} size="lg" />
            Custumer
          </label>
          <Input value={detail?.account?.user?.name} readOnly />  
        </FormItem>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            Customer E-mail
          </label>
          <Input value={detail?.account?.user?.email} readOnly />  
        </FormItem>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faFileAlt} size="lg" />
            Account
          </label>
          <Input value={detail?.account?.number} readOnly />  
        </FormItem>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faMoneyBill} size="lg" />
            Reported Amount
          </label>
          <Input value={detail?.amount_show+" USD"} readOnly />  
        </FormItem>

        <FormItem>
          <label htmlFor="amount">
            <FontAwesomeIcon icon={faImage} size="lg" />
            Image
          </label>
          <img src={detail?.check_url} alt="Check" />
        </FormItem>

        {detail?.status === "P" &&
          <div className='row flex-start'>

            <a onClick={()=>handleUpdate('R')}>
              <SecondaryButton background={"#BDE0FE"}>
                <FontAwesomeIcon icon={faCheckCircle} color="#2799fa"/>
                REJECT
              </SecondaryButton>
            </a>
            <a onClick={()=>handleUpdate('A')}>
              <PrimaryButton border={"#2799fa"}>
                <FontAwesomeIcon icon={faCheckCircle} color="#FFFFFF"/>
                ACCEPT
              </PrimaryButton>
            </a>

          </div>
        }


      </Content>

    </>
  );
}