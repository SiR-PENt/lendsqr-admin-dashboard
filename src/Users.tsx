import Page from "./components/dashboard/Page"
import Card from "./components/dashboard/Card"
import user from "./assets/dashboard/card-users.png"
import activeUsers from "./assets/dashboard/active-users.png"
import loanUsers from "./assets/dashboard/loan-users.png"
import savingsUsers from "./assets/dashboard/savings-users.png"
import request from "./utils/request"
import Table from "./components/dashboard/Table"

import { useEffect, useState } from 'react'

export type DataProps = {
    organization: string,
    userName: string,
    email: string,
    id: string,
    createdAt: string,
    phoneNumber: string,
    status?: string,
}[]

export default function Users() {

  const [ data, setData ] = useState<DataProps>([] as DataProps) //assert the type to the one 
  // specified above to avoid runtime type errors

  const shortenStr = (str: string, num: number): string => {
    if(str.length > 6) {
      return `${str.slice(0, num)}...`
    }
    else {
       return str
    }
  }

  useEffect(() => {
    const fetchData = (): void => {
    request.get('/users')
    .then(({data}) => {
      const filteredData = data.map((item: typeof data) => {
        const { createdAt, orgName: organization, email, id, phoneNumber, userName} = item
        //  return data that conforms to the shape of the dataProps properties
        return { createdAt, organization, email, id, phoneNumber, userName }
      }) 
      setData(filteredData)  
    })
    .catch(err => console.log(err))
  }
    fetchData()
  }, [])

    return (

     <Page title={"Users"}>
      <div className="container">
      <div className="analytics-container">
       <Card title={"Users"} count={1234} src={user} className={"users"}/>
       <Card title={"Active Users"} count={1234} src={activeUsers} className={"active-users"}/>  
       <Card title={"Users with Loans"} count={1234} src={loanUsers} className={"loan-users"}/>
       <Card title={"Users with Savings"} count={1234} src={savingsUsers} className={"saving-users"}/>
      </div>
       <Table data={data} />
      </div>
     </Page>
    )
}