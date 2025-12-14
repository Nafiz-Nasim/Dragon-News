import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvaider";

export default function Nav() {
  const { user ,LogOut} = use(AuthContext);
  const handleLogout = () => {
    LogOut().then((result)=>{
      alert("You log out");
    }).catch((error)=>{
      console.log(error);
      
    })
  };
  return (
    <section className="flex items-center justify-between w-11/12 mx-auto my-10">
      <div></div>
      <div className="nav flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center justify-center gap-5">
        <img src="/src/assets/user.png" alt="" />

        {user ? (
          <button
            className="btn btn-outline btn-primary"
            onClick={handleLogout}
          >
            logout
          </button>
        ) : (
          <Link to={"/auth/login"}>
            {" "}
            <button className="btn btn-outline btn-primary">login</button>
          </Link>
        )}
      </div>
    </section>
  );
}
