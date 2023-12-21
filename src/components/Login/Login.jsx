import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/json/login.json";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {};
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
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
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
                      Login
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">
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
