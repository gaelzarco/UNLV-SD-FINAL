import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function CreateUser() {

  const history = useHistory()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
    role: ''
	})

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch('/user', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
    })

    history.push('/')
  }

  return (
    <div className='createUserForm'>
      <h1>Create User</h1>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
                type='text'
                name='firstName'
                id='firstName'
                value={user.firstName}
							  onChange={e => setUser({ ...user, firstName: e.target.value })}
                required
            />
            <label htmlFor='lastName'>Last Name</label>
            <input
                type='text'
                name='lastName'
                id='lastName'
                value={user.lastName}
							  onChange={e => setUser({ ...user, lastName: e.target.value })}
                required
            />
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                id='email'
                value={user.email}
							  onChange={e => setUser({ ...user, email: e.target.value })}
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                type='text'
                name='password'
                id='password'
                value={user.password}
							  onChange={e => setUser({ ...user, password: e.target.value })}
                required
            />
            <label htmlFor='role'>Role</label>
            <select id='role' name='role'value={user.role} onChange={e => setUser({ ...user, role: e.target.value })}>
                <option value='Admin'>Admin</option>
                <option value='Customer'>Customer</option>
            </select>
            <input type='submit'></input>
          </form>
        </div>
    </div>
  );
}

export default CreateUser;
