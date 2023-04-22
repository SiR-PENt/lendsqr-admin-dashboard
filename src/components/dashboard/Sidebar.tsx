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

export default function Sidebar() {

   return (
        <nav className="sidebar">
            
            <div className="sidebar-logo-container">
                <img src={logo} alt="lendsqr-logo"/>
            </div>
            
            <ul>

            <li>
                <img src={briefcase} alt='briefcase'/>
                <p>Switch Organization</p>
                <img src={dropdown} alt='dropdown'/>
            </li>

            <div>
                <li>
                <img src={home} alt='briefcase'/>
                <p>Dashboard</p>
                </li>

                <p className="title">Customers</p>

                <li>
                <img src={userFriends} alt='userFriends'/>
                <p>Users</p>
                </li>

                <li>
                <img src={users} alt='users'/>
                <p>Guarantors</p>
                </li>

                <li>
                <img src={sack} alt='sack'/>
                <p>Loans</p>
                </li>

                <li>
                <img src={handShake} alt='handshake'/>
                <p>Decision Models</p>
                </li>

                <li>
                <img src={piggyBank} alt='piggybank'/>
                <p>Savings</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Loan Requests</p>
                </li>

                <li>
                <img src={userCheck} alt='userCheck'/>
                <p>Whitelist</p>
                </li>

                <li>
                <img src={userTimes} alt='userTimes'/>
                <p>Karma</p>
                </li>

                <p className="title">Businesses</p>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Organization</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Loan Products</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Savings Products</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Fees and Charges</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Transactions</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Services</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Service Account</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Settlements</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Reports</p>
                </li>

                <p className="title">Settings</p>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Preferences</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Fees and Pricing</p>
                </li>

                <li>
                <img src={sack1} alt='sack'/>
                <p>Audit Logs</p>
                </li>
            </div>
            </ul>
        </nav>
   )
}