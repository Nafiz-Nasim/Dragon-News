import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <section className='flex flex-col items-center  h-screen'>


      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
        <h2 className='text-2xl text-center mt-5 '>Login Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <p>Don't have an account ? <Link to={"/auth/register"}> <span className='text-red-600'> Register</span></Link> </p>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
    </section>
  )
}
