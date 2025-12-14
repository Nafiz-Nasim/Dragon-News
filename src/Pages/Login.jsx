import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvaider";

export default function Login() {
  const { logIn } = use(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email,password)
      .then((result) => {
        alert(" successfully login ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="flex flex-col items-center  h-screen">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
        <h2 className="text-2xl text-center mt-5 ">Login Your Account</h2>
        <form action="" onSubmit={handleLogin}>
          {" "}
          <div className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <p>
                Don't have an account ?{" "}
                <Link to={"/auth/register"}>
                  {" "}
                  <span className="text-red-600"> Register</span>
                </Link>{" "}
              </p>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </form>
      </div>
    </section>
  );
}
