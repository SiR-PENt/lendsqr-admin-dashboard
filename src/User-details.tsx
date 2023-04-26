import Page from "./components/dashboard/Page";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "./utils/requests";
import { useEffect, useState } from 'react';
import backArrow from "./assets/dashboard/back-arrow.png"
import fullStar from "./assets/dashboard/full-star.png"
import emptyStar from "./assets/dashboard/empty-star.png"
import { AxiosResponse } from "axios";


export default function UserDetails():JSX.Element {
   
    const [ user, setUser ] = useState<{[key: string]: any}>();
    const [ active, setActive ] = useState<'General Settings' | "Documents" | 'Bank Details'  >("General Settings");
    

    const { id } = useParams();

    const fetchUserDetails = (): void => {

      const usersFromLocalStorage = localStorage.getItem('users')
      if(usersFromLocalStorage) {
        const users: {[key: string] : any}[] = JSON.parse(usersFromLocalStorage); //users is an array of objects
        // Loop through the users array and find if the id of a particular user is present
        const user = users.find((u: {[key: string]: any}) => u.id === id); 
        if(user){
          setUser(user)
        }
        //if not present, fetch user details from API and update the localstorage, then setUser to the fetched data
        else {
          getUserById(id!)
          .then(({data}: AxiosResponse<{[key: string]:any}>) => {
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users));
            setUser(data)
          })
          .catch(err => console.log(err))
        }
      }
      //if users doesn't exist yet, fetchData from the API and initialize the users property on the localStorage
      else {
        getUserById(id!)
        .then(({data}: AxiosResponse<{[key: string]:any}>) => {
          const users = [data]
          localStorage.setItem('users', JSON.stringify(users));
          setUser(data)
        }) 
        .catch(err => console.log(err)) 
      }
    }

    useEffect(() => {
        fetchUserDetails()
    }, [id])

    return (
       <Page>

         <Link style={{ textDecoration: 'none'}} to={'/dashboard/users'}>
         <div className="nav-back-container">
          <img src={backArrow} alt='back arrow icon'/>
          <p>Back to Users</p>
        </div> 
        </Link>

        <main className="user-details-container">
          <div className="title-container">
           <h1>User Details</h1>
          <div className="button-container">
            <button>Blacklist User</button>
            <button>Activate User</button>
         </div>
          </div>
         {
        user && (
         <>
         <section className="user-details">
          <div>
           <div className="avatar-container">
             <img src={user.profile?.avatar} alt='avatar'/> 
             <div className='user-name'>
              <p>{`${user.profile.firstName} ${user.profile.lastName}`}</p>  
              <p>{user.userName}</p>  
             </div>
            </div>
            <div>
            <div className="col-2">
                <p>User's Tier</p>
                <div>
                    <img src={fullStar} alt='full star icon'/>
                    <img src={emptyStar} alt='full star icon'/>
                    <img src={emptyStar} alt='full star icon'/>
                </div>
            </div> 
            <div className="col-3">
                <p>₦{user.accountBalance}</p>
                <p>{user.accountNumber}/Providus Bank</p>
            </div>
            </div>
            </div>
            <footer>
                <p onClick={() => setActive('General Settings')} className={`${active === 'General Settings' ? 'active' : ''}`}>General Details</p>
                <p>Documents</p>
                <p>Bank Details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App and System</p>
            </footer>
         </section>

         <section className='user-info'>

            <div className="personal-info">
                <h3>Personal Information</h3>
            <div className="personal-info-table">
               <div>
               <p>Full Name</p> 
               <p>{`${user.profile.firstName} ${user.profile?.lastName}`}</p>    
               </div>
               <div>
               <p>Phone Number</p> 
               <p>{user.profile.phoneNumber}</p>    
               </div>
               <div>
               <p>Email Address</p> 
               <p>{user.email}</p>    
               </div>
               <div>
               <p>BVN</p> 
               <p>{user.profile.bvn}</p>    
               </div>
               <div>
               <p>Gender</p> 
               <p>{user.profile.gender}</p>    
               </div>
               <div>
               <p>Marital Status</p> 
               <p>None</p>    
               </div>
               <div>
               <p>Children</p> 
               <p>None</p>    
               </div>
               <div>
               <p>Type of Residence</p> 
               <p>None</p>    
               </div>
                </div> 
            </div>
            
            <div className="education">
              <h3>Education and Employment</h3>
              <div className="education-table">
              <div>
               <p>Level of Education</p> 
               <p>{user.education.level}</p>    
               </div>
              <div>
               <p>Employment Status</p> 
               <p>{user.education.employmentStatus}</p>    
               </div>
              <div>
               <p>Sector of Residence</p> 
               <p>{user.education.sector}</p>    
               </div>
              <div>
               <p>Duration of Employment</p> 
               <p>{user.education.duration}</p>    
               </div>
              <div>
               <p>Office Email</p> 
               <p>{user.education.officeEmail}</p>    
               </div>
              <div>
               <p>Monthly Income</p> 
               <p>{`₦${user.education.monthlyIncome[0]} - ₦${user.education.monthlyIncome[1]}`}</p>    
               </div>
              <div>
               <p>Loan Repayment</p> 
               <p>₦{user.education.loanRepayment}</p>    
               </div>
              </div>
            </div>

            <div className="socials">
              <h3>Socials</h3>
              <div className="socials-table">
              <div>
               <p>Twitter</p> 
               <p>{user.socials.twitter}</p>    
               </div>                
              <div>
               <p>Facebook</p> 
               <p>{user.socials.facebook}</p>    
               </div>                
              <div>
               <p>Instagram</p> 
               <p>{user.socials.instagram}</p>    
               </div>                
              </div>
            </div>

            <div className="guarantor">
              <h3>Guarantor</h3>
              <div className="guarantor-table">
              <div>
               <p>Full Name</p> 
               <p>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</p>    
               </div>                
              <div>
               <p>Phone Number</p> 
               <p>{user.guarantor.phoneNumber}</p>    
               </div>                
              <div>
               <p>Email</p> 
               <p>None</p>    
               </div>                
              <div>
               <p>Relationship</p> 
               <p>None</p>    
               </div>                
              </div>
            </div>
            <div className="guarantor footer-item">

              <div className="guarantor-table">
              <div>
               <p>Full Name</p> 
               <p>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</p>    
               </div>                
              <div>
               <p>Phone Number</p> 
               <p>{user.guarantor.phoneNumber}</p>    
               </div>                
              <div>
               <p>Email</p> 
               <p>None</p>    
               </div>                
              <div>
               <p>Relationship</p> 
               <p>None</p>    
               </div>                
              </div>
            </div>
         </section>
         </>
        ) 
         }
        </main>
       </Page>
    )
}