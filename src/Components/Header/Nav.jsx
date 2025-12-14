import React from 'react'
import { Link, NavLink } from 'react-router'


export default function Nav() {
  return (
    <section className='flex items-center justify-between w-11/12 mx-auto my-10'>
 <div></div>
<div className="nav flex gap-5">
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/about"}>About</NavLink>
    <NavLink to={"/career"}>Career</NavLink>
</div>
<div className="login-btn flex items-center justify-center gap-5">
    <img src="/src/assets/user.png" alt="" />
  
  <Link to={"/auth/login"}> <button class="btn btn-outline btn-primary">login</button></Link>  
</div>
    </section>
  )
}
