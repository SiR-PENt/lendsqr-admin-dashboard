import hero from './assets/loginHero.png';
import logo from './assets/logo.png';
import { useState } from 'react'
import Input from './components/login-auth/Input';

export default function LoginAuth() {
    
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('')
  const [ hide, setHide ] = useState<boolean>(true)

    return (
        <div className='login-container'>
          <div className='hero-container'>
          {/* <img src={logo} alt='lendsqr-logo'/> */}
          <img src={hero} alt='hero'/>
          </div>
          <form className='login-form'>
            <div>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>   
            <div>
              <div className='input-container'>
              <Input type='text' placeholder={'Email'} value={email} onChange={setEmail}/>
              </div>
              <div className='input-container'>
              <Input type={hide ? "password" : 'text'} placeholder={'Password'} value={password} onChange={setPassword}/>
              <span onClick={() => setHide(!hide)}>{hide ? "Show": "Hide"}</span>
              </div>
            </div>
              <p>Forgot Password?</p>
               <button>
                Log In
               </button>
            </div>
          </form>
        </div>
    )
} 