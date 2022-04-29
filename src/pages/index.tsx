import Head from 'next/head'
import OutHeader from '../components/out-header'

import SignUp from '../pages/sign-up';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Turnover BANK</title>
      </Head>   

      <OutHeader/>
      <SignUp />

      
     
    </div>
  )
}
