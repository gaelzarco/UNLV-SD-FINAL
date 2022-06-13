import '../App.css';
import { useContext, useState } from 'react'
import { useHistory } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function LandingPage() {

    const history = useHistory()

    const { setCurrentUser } = useContext(CurrentUser)

    const [ credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })

    const [ errMessage, setErrMessage ] = useState(null)

    async function handleSubmit(e) {
        const res = await fetch(`/user/login`)
    }

    return (
      <div className='landingpage'>
        <h1 className='title'>
            React.js Landing Page
          </h1>
  
          <div id='loginlanding'>
            <form action='/user/login' method='POST'>
                <label htmlFor='email'> Email </label>
                <input 
                    type='text'
                    id='email'
                    name='email'
                    required
                />
                <label htmlFor='password'> Password </label>
                <input 
                    type='text' 
                    id='password' 
                    name='password'
                    required
                />
                <input type='submit'></input>
            </form>
          </div>
  
          <div>
            <a href="/createuser">New? Create Account</a>
          </div>
      </div>
    );
  }
  
  export default LandingPage;