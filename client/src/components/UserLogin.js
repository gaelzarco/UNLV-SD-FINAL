import '../App.css';
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

function UserLogin() {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    const [ credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })

    const [ errMessage, setErrMessage ] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()

        const res = await fetch(`http://localhost:5000/user/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await res.json()
        console.log(data)

        if (data.message) {
            setErrMessage(data.message)
        } else {
            setCurrentUser(data.user)
            console.log(currentUser)
            navigate('/catalog')
        }
    }
    return (
        <div className='loginpage'>
        <h1 className='title'>
            Login
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
                <input type='submit'/>
            </form>
          </div>
        </div>
    );
}

export default UserLogin