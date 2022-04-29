
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import InHeader from '../../components/in-header';

import {Title} from './styles'
export default function Soon({handleMenu}) {
 
  return (
    <>

      <Head>
        <title>Coming Soon | BNB Bank</title>
      </Head>   
      
      <InHeader title='In Development' handleMenu={handleMenu}/>

      <Title>
        <FontAwesomeIcon icon={faSpinner} color="#ccc"/>
        Functionality under development
      </Title>

    </>
  );
}