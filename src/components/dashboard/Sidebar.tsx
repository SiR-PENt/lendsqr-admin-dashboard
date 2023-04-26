import logo from "../../assets/logo.png"
import briefcase from '../../assets/dashboard/briefcase.png'
import dropdown from '../../assets/dashboard/dropdown.png'
import home from '../../assets/dashboard/home.png'
import userFriends from '../../assets/dashboard/user-friends.png'
import users from '../../assets/dashboard/users.png'
import sack from '../../assets/dashboard/sack.png'
import handShake from '../../assets/dashboard/handshake.png'
import piggyBank from '../../assets/dashboard/piggy-bank.png'
import sack1 from '../../assets/dashboard/sack1.png'
import userCheck from '../../assets/dashboard/user-check.png'
import userTimes from '../../assets/dashboard/user-times.png'
import savingsProduct from '../../assets/dashboard/savings-product.png'
import coinSolid from '../../assets/dashboard/coins-solid.png'
import transaction from '../../assets/dashboard/transactions.png'
import service from '../../assets/dashboard/services.png'
import serviceAccount from '../../assets/dashboard/service-account.png'
import settlement from '../../assets/dashboard/settlement.png'
import chartBar from '../../assets/dashboard/chart-bar.png'
import slider from '../../assets/dashboard/sliders.png'
import fees from '../../assets/dashboard/fees-and-pricing.png'
import audit from '../../assets/dashboard/audit.png'
import systemMessages from '../../assets/dashboard/system-messages.png'
import signOut from '../../assets/dashboard/sign-out.png'
import { NavLink, useNavigate } from "react-router-dom"


export default function Sidebar({ show }: { show: boolean }) {
   
   const navigate = useNavigate()

   const handleLogOut = () => {
       navigate('/')
       sessionStorage.removeItem('auth')
   }

   return (
        <aside className={`${show ? 'show' : ''} sidebar`}>
            
            <div className="sidebar-logo-container">
                <img src={logo} alt="lendsqr-logo"/>
            </div>
            
            <ul>

                <li>
                <img src={briefcase} alt='briefcase icon'/>
                <p>Switch Organization</p>
                <img src={dropdown} alt='dropdown icon'/>
                </li>

    
                <li>
                <img src={home} alt='briefcase icon'/>
                <p>Dashboard</p>
                </li>

                <p className="title">Customers</p>
                
                <NavLink
                 style={{
                    textDecoration: 'none'
                 }}
                 to="/dashboard/users"
                 className={({ isActive }) =>
                 isActive ? "active" : ""}>
                <li>
                <img src={userFriends} alt='user icon'/>
                <p>Users</p>
                </li>
                </NavLink>

                <li>
                <img src={users} alt='users icon'/>
                <p>Guarantors</p>
                </li>

                <li>
                <img src={sack} alt='sack icon'/>
                <p>Loans</p>
                </li>

                <li>
                <img src={handShake} alt='handshake icon'/>
                <p>Decision Models</p>
                </li>

                <li>
                <img src={piggyBank} alt='piggybank icon'/>
                <p>Savings</p>
                </li>

                <li>
                <img src={sack1} alt='sack icon'/>
                <p>Loan Requests</p>
                </li>

                <li>
                <img src={userCheck} alt='user icon'/>
                <p>Whitelist</p>
                </li>

                <li>
                <img src={userTimes} alt='user icon'/>
                <p>Karma</p>
                </li>

                <p className="title">Businesses</p>

                <li>
                <img src={briefcase} alt='briefcase icon'/>
                <p>Organization</p>
                </li>

                <li>
                <img src={sack1} alt='loan icon'/>
                <p>Loan Products</p>
                </li>

                <li>
                <img src={savingsProduct} alt='savings icon'/>
                <p>Savings Products</p>
                </li>

                <li>
                <img src={coinSolid} alt='fees icon '/>
                <p>Fees and Charges</p>
                </li>

                <li>
                <img src={transaction} alt='transaction icon'/>
                <p>Transactions</p>
                </li>

                <li>
                <img src={service} alt='service icon'/>
                <p>Services</p>
                </li>

                <li>
                <img src={serviceAccount} alt='service-account icon'/>
                <p>Service Account</p>
                </li>

                <li>
                <img src={settlement} alt='settlement icon'/>
                <p>Settlements</p>
                </li>

                <li>
                <img src={chartBar} alt='reports icon'/>
                <p>Reports</p>
                </li>

                <p className="title">Settings</p>

                <li>
                <img src={slider} alt='preferences icon'/>
                <p>Preferences</p>
                </li>

                <li>
                <img src={fees} alt='fees icon'/>
                <p>Fees and Pricing</p>
                </li>

                <li>
                <img src={audit} alt='audit icon'/>
                <p>Audit Logs</p>
                </li>

                <li>
                <img src={systemMessages} alt='system icon'/>
                <p>System Messages</p>
                </li>

                 <footer>
                <li onClick={handleLogOut}>
                <img src={signOut} alt='signout icon'/>
                <p>Log Out</p>
                </li>
                <p>v1.2.0</p>
                 </footer>
            </ul>
        </aside>
   )
}