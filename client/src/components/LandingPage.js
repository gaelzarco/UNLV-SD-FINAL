import '../App.css';
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

function LandingPage() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [ credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })

    const [ errMessage, setErrMessage ] = useState(null)

    async function handleSubmit(e) {
        const res = await fetch(`/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await res.json()

        if (res.status === 200) {
            setCurrentUser(data.user)
            navigate('/catalog', { replace: true })
        } else {
            setErrMessage(data.message)
        }
    }

    return (
      <div className='landingpage'>
        <h1 className='title'>
            React.js Landing Page
          </h1>

          {errMessage !== null
                ? (
                    <div className="error" role="alert">
                        {errMessage}
                    </div>
                )
                : null
            }
  
          <div id='loginlanding'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'> Email </label>
                <input 
                    type='text'
                    id='email'
                    name='email'
                    value={credentials.email}
                    onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                    required
                />
                <label htmlFor='password'> Password </label>
                <input 
                    type='text' 
                    id='password' 
                    name='password'
                    value={credentials.password}
                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
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