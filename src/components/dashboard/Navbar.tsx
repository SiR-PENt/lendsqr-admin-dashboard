import notification from '../../assets/dashboard/notification.png'
import search from '../../assets/dashboard/search.png'
import avatar from '../../assets/dashboard/avatar.png'
import dropdown2 from '../../assets/dashboard/dropdown2.png'
import { FiMenu } from 'react-icons/fi'

export type ToggleSidebar = {
    toggleSidebar : { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}
}
export default function Navbar({ toggleSidebar}: ToggleSidebar) {
    
   const { setShow, show } = toggleSidebar;

    return (
        <nav className="navbar">
          <div className='nav-container'>
            <FiMenu
            onClick={() => {
              setShow(!show)
              console.log(show)
            } }
             className='menu'/>
            <div className='search-container'>
              <div className="input-container">
                <input placeholder="Search for anything"/>              
              </div>
              <button className='btn-search'>
               <img src={search} alt='search-icon'/>
              </button>
             </div>
              <div className='user-nav'>
                <p>Docs</p>
                <img src={notification} alt='notification icon' />
                <img src={avatar} className='avatar' alt='avatar' />
                <p>Adedeji</p>
                <img src={dropdown2} alt='dropdown icon' />
              </div>
            </div>
        </nav>
    )
} 


