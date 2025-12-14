import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvaider";

export default function Register() {
  const { createUser, setUser, user } = use(AuthContext);
  const HandleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const userinfo=result.user
        setUser(result.user);
     console.log(userinfo);
     
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <section className="flex flex-col items-center  h-screen">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
        <h2 className="text-2xl text-center mt-5 ">Register Your Account</h2>
        <form action=" " onSubmit={HandleRegister}>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* Photo URL */}
              <label className="label">Photo UR</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="NaPhoto URme"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <p>
                Already Have an Account?{" "}
                <Link to={"/auth/login"}>
                  {" "}
                  <span className="text-red-600"> Login</span>
                </Link>{" "}
              </p>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </form>
      </div>
      <p>{user?.email}</p>
    </section>
  );
}
