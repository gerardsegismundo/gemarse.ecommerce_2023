import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div className='account'>
      <div className='container'>
        <div className='sign-in'>
          <h2>Sign In</h2>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
          </div>
          <Link>Forgot password?</Link>
          <button className='sign-in-btn'>Sign In</button>
          <p>If you have not created an account yet, please register here</p>
          <button className='sign-up-btn'>Create An Account</button>
          <p>Or sign in using</p>
        </div>
      </div>
    </div>
  )
}

export default Account
