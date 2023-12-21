import React from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../../public/json/register.json";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {};

  return (
    <div className="container mx-auto p-5">
      <div className="grid h-screen place-content-center">
        <h1 className="text-5xl font-bold text-center text-white mt-36">
          Welcome To Our Website.{" "}
          <span className="text-indigo-600">Please Register!!</span>
        </h1>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie animationData={registerAnimation} loop={true} />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirm"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">
                    Sign Up
                  </button>
                  <p className="text-center mt-2">
                    New To Hotel Booking?{" "}
                    <Link to="/login" className="text-yellow-500">
                      Create An Account
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

export default Register;
