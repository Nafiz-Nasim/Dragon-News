import React from 'react'
import { Link } from 'react-router'

export default function Register() {
  return (
     <section className='flex flex-col items-center  h-screen'>


      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
        <h2 className='text-2xl text-center mt-5 '>Register Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          {/* Photo URL */}
          <label className="label">Photo UR</label>
          <input type="text" className="input" placeholder="NaPhoto URme" />
          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
          <p>Already Have an Account? <Link to={"/auth/login"}> <span className='text-red-600'> Login</span></Link> </p>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
    </section>
  )
}
