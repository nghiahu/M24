import React from 'react'
import "./login.scss"
export default function login() {
  return (
    <div className='login'>
      <div className='login_img'>
        <img src="https://kyluc.vn/Userfiles/Upload/images/Download/2016/6/17/9ad7315cfa694d3083c5a0bf470c172a.jpg" alt="" />
      </div>
      <div className='login_from'>
        <form className='from'>
          <p className='login_title'>Login</p>
          <div className='login_email'>
            <label>E-Mail</label>
            <input className='name_inp' type="text" placeholder='Placeholder content'/>
          </div>
          <div className='login_pass'>
            <label>Password</label>
            <input className='pass_inp' type="text" placeholder='Placeholder content'/>
          </div>
            <p className='fogot'>Forgot password?</p>
            <button className='from_button'>Login</button>
        </form>
        <p className='bars'>or</p>
        <button className='register'>Register now</button>
      </div>
    </div>
  )
}
