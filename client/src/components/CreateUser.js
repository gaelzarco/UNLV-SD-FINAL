function CreateUser() {
  return (
    <div className='createUserForm'>
      <h1>Create User</h1>
        <div className='form'>
          <form action='/user' method='POST'>
            <label htmlFor='firstName'>First Name</label>
            <input
                type='text'
                name='firstName'
                id='firstName'
                required
            />
            <label htmlFor='lastName'>Last Name</label>
            <input
                type='text'
                name='lastName'
                id='lastName'
                required
            />
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                id='email'
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                type='text'
                name='password'
                id='password'
                required
            />
            <label htmlFor='role'>Role</label>
            <select id='role' name='role'>
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
