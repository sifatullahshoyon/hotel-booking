import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/json/login.json";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { IoEyeSharp } from "react-icons/io5";
import './Login.css';

const Login = () => {
  const {signIn , googleLogin , resetPassword} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email , password);

    signIn(email , password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      toast('login successfully');
      form.reset();
      navigate('/');
    })
    .catch((err) => {
      console.error(err.message);
    })

    // handleResetPassword(email);
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch((err) => {
      console.error(err.message);
    })
  };

  const handleResetPassword = (e) => {
    resetPassword(e.target.email.value)
    .then((result) => {
      alert('password reset email send')
    })
    .catch((err) => console.error(err.message))
  };
  return (
    <div className="container mx-auto p-5">
      <div className="grid h-screen place-content-center">
        <h1 className="text-5xl font-bold text-center text-white mt-36">
          Please <span className="text-indigo-600">Login!!</span>
        </h1>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie animationData={loginAnimation} size={100} loop={true} />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Valid Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="input-container">
                    <div onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <IoEyeSharp className="icon" />
                      ) : (
                        <FaEyeSlash className="icon" />
                      )}
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Name"
                      name="name"
                      className="input input-bordered"
                      id="password"
                      required
                    />
                  </div>

                  <label className="label">
                    <a href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">
                    Sign Up
                  </button>
                  <p className="text-center mt-2">
                    Already have an account?{" "}
                    <Link to="/register" className="text-yellow-500">
                     Create An Account
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button onClick={handleGoogleLogin} className="btn btn-primary text-white">
                    <FaGoogle /> Login With Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
