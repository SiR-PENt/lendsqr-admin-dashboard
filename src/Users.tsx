import Page from "./components/dashboard/Page"
import Card from "./components/dashboard/Card"
import user from "./assets/dashboard/card-users.png"
import activeUsers from "./assets/dashboard/active-users.png"
import loanUsers from "./assets/dashboard/loan-users.png"
import savingsUsers from "./assets/dashboard/savings-users.png"
import filter from "./assets/dashboard/filter.png"
import request from "./utils/request"
import { useEffect, useState } from 'react'

type DataProps = {
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

  useEffect(() => {
    const fetchData = (): void => {
    request.get('/users')
    .then(({data}) => {
      console.log(data)
      const filteredData = data.map((item: typeof data) => {
        const { createdAt, orgName: organization, email, id, phoneNumber, userName} = item
        //  return data that conforms to the shape of the dataProps properties
        return { createdAt, organization, email, id, phoneNumber, userName }
      }) 
      console.log(filteredData)
      setData(filteredData)  
    })
    .catch(err => console.log(err))
  }
    fetchData()
  }, [])

    return (

     <Page>
      <h1>Users</h1>

      <div className="container">
      <div className="analytics-container">
       <Card title={"Users"} count={1234} src={user} className={"users"}/>
       <Card title={"Active Users"} count={1234} src={activeUsers} className={"active-users"}/>  
       <Card title={"Users with Loans"} count={1234} src={loanUsers} className={"loan-users"}/>
       <Card title={"Users with Savings"} count={1234} src={savingsUsers} className={"saving-users"}/>
      </div>

      <section className="table-container">
         <table>
          <thead>
          <tr>
            <th>
             Organization     
             <img src={filter} alt='filter icon'/> 
            </th>
            <th>
             Username 
             <img src={filter} alt='filter icon'/>      
            </th>
            <th>
             Email 
             <img src={filter} alt='filter icon'/>      
            </th>
            <th>
             Phone Number 
             <img src={filter} alt='filter icon'/>    
            </th>
            <th>
             Date Joined 
             <img src={filter} alt='filter icon'/>    
            </th>
            <th>
             Status    
             <img src={filter} alt='filter icon'/> 
            </th>
          </tr>
          </thead>
          <tbody>
            
             {
               data.map((data) => {
                  const { id, organization, userName, email, phoneNumber, createdAt } = data
                  return (
                      <tr key={id}>
                      <td>{organization}</td>             
                      <td>{userName}</td>   
                      <td>{email}</td>   
                      <td>{phoneNumber}</td>   
                      <td>{createdAt}</td>   
                      <td>Inactive</td>   
                      </tr>          
                  )
                })     
             }          
          </tbody>
         </table>
      </section>
      </div>
     </Page>
    )
}