import React from 'react'

function Signup() {
  return (
    <div className="signUp">
        <div className="title">
            Login
          </div>
             <form>
             <label for="Email">Email ID</label>
              <input type="Email" name="Email" value=""/>
              <label for="password">Password</label>
              <input type="password" id="pass" name="password" minlength="8" required/>
             
             <div className='credentials'>
              <button type="submit" className="btn btn-primary">Login</button>
              <a href="">Forgot password?</a>
             </div>



             <div className='account'>
              <span>Don't have an account?</span>
              <a href="">Create new</a>
              </div>
             <div className='horizintals'>
              <div></div> Or Login with <div></div>
             </div>
             <div>
              <img src=""/>
              Sign in with Google
             </div>








             </form>

            
  
        
    </div>
  )
}

export default Signup