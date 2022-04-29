type User ={
  id: number,
  name: string,
  email: string,
}

type Account = {
  number: number,
  user:User
}

 export type TransactionProps = {
  id: number,
  account_id: number,
  description: string,
  status: string,
  type:string,
  date:string,  
  amount_show:string,
  created_show:string,
  status_show:string,
  check_url:string,
  account:Account,
}

export type ResumeProps = {
  check:string,
  expense:string,
  current:string,
}


export type BalanceProps = {
  resume:ResumeProps,
  transactions:TransactionProps[]
}
