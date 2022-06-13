import '../App.css';

function LandingPage() {
    return (
      <div className='landingPage'>
        <h1 className='title'>
            React.js Landing Page
          </h1>
  
          <div id='loginlanding'>
            <form method='POST'>
              <div>
                <label className='userlabel'> Username </label>
                <input type='text' className='userlogin' htmlFor='username'></input>
              </div>
              <div>
                <label className='userlabel'> Password </label>
                <input type='text' className='userlogin' htmlFor='userpasword'></input>
              </div>
              <div>
                <button id= 'login' type='submit'>Login</button>
              </div>
            </form>
          </div>
  
          <div>
            <a href="/createuser">New? Create Account</a>
          </div>
      </div>
    );
  }
  
  export default LandingPage;