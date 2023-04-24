import Page from "./components/dashboard/Page"
import Card from "./components/dashboard/Card"
import user from "./assets/dashboard/card-users.png"
import activeUsers from "./assets/dashboard/active-users.png"
import loanUsers from "./assets/dashboard/loan-users.png"
import savingsUsers from "./assets/dashboard/savings-users.png"
import Table from "./components/dashboard/Table"
import { getUsers } from "./utils/requests"
import { useEffect, useState } from 'react'
import { AxiosResponse } from "axios"

export default function Users<T extends object>() {

  const [ users, setUsers ] = useState<T[]>([]) 

  useEffect(() => {
    const fetchData = (): void => {
    getUsers()
    .then(({data} : AxiosResponse<T[]>) => { 
      setUsers(data)  
    })
    .catch(err => console.log(err))
  }
    fetchData()
  }, [])

    return (

     <Page title={"Users"}>
      <div className="users-container">
      <div className="analytics-container">
       <Card title={"Users"} count={1234} src={user} className={"users"}/>
       <Card title={"Active Users"} count={1234} src={activeUsers} className={"active-users"}/>  
       <Card title={"Users with Loans"} count={1234} src={loanUsers} className={"loan-users"}/>
       <Card title={"Users with Savings"} count={1234} src={savingsUsers} className={"saving-users"}/>
      </div>
      <Table users={users} />

      <footer>
        <p>Showing</p>
        <div>

        </div>
        <p>out of {users.length}</p>
      </footer>
      </div>
     </Page>
    )
}