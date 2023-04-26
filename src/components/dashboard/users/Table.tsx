import filter from "../../../assets/dashboard/filter.png"
import ellipsis from "../../../assets/dashboard/ellipsis.png"
import Dropdown from "./Dropdown"
import { useState } from "react"

type TableProps<T extends object> = {
    users: T
} // users is a generic of type object just as in he Users component

type User = {
   [key: string]: any
}  //use index signature for type checking individual objects in the users array. 

export default function Table<T extends object>({ users }: TableProps<T[]>) {

    const [ activeId, setActiveId ] = useState<string>('');
    const shortenStr = (str: string, num: number): string => {
        if(str.length > 7) {
          return `${str.slice(0, num)}...`
        }
        else {
           return str
        }
      }
    
    return (

        <section className="table-container">
        <table>
         <thead>
         <tr>
           <th>
             <div>
            <p>Organization</p>
            <img src={filter} alt='filter icon'/> 
             </div>
           </th>
           <th>
           <div>
            <p>Username</p> 
            <img src={filter} alt='filter icon'/>  
            </div>    
           </th>
           <th>
           <div>
            <p>Email</p> 
            <img src={filter} alt='filter icon'/>      
           </div>
           </th>
           <th>
             <div>
            <p>Phone Number</p> 
            <img src={filter} alt='filter icon'/>    
             </div>
           </th>
           <th>
             <div>
            <p>Date Joined</p> 
            <img src={filter} alt='filter icon'/>    
             </div>
           </th>
           <th>
             <div>
             <p>Status</p>    
             <img src={filter} alt='filter icon'/> 
             </div>
           </th>
         </tr>
         </thead>
         <tbody>
           
            {
            users.map((user: User) => {  

                 const { id, orgName, userName, email, phoneNumber, createdAt } = user
                 const date = new Date(createdAt);
                 const formattedDate = date.toLocaleString('en-NG', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                  });

                 const slicedOrganization = shortenStr(orgName, 11)
                 const slicedUserName = shortenStr(userName, 10)
                 const slicedPhoneNumber = shortenStr(phoneNumber, 15)
                 const slicedEmail = shortenStr(email, 7)
                 
                 return (

                     <tr key={id} className="tr-body">
                     <td>{slicedOrganization}</td>             
                     <td>{slicedUserName}</td>   
                     <td>{slicedEmail}</td>   
                     <td>{slicedPhoneNumber}</td>   
                     <td>{formattedDate}</td>   
                     <td>
                       <div>
                         <p className='status'>Inactive</p>
                         <img src={ellipsis} alt="ellipsis icon"
                          onMouseEnter={() => setActiveId(id)} 
                          />
                         <Dropdown id={id} toggleDropdown={{activeId, setActiveId}}/>
                       </div>
                     </td>   
                     </tr>                     
                 )

               })     
            }          
         </tbody>
        </table>
     </section>     
    )
}