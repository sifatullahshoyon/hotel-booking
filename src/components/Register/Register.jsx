import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../../public/json/register.json";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import "./Register.css";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    // Password Validation
    if (password !== confirm) {
      return toast("Password Don't Match");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("User Register Successfully");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error.message);
      });
  };

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
                  <span className="text-red-500">{error}</span>
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
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <div className="input-container">
                    <div
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <IoEyeSharp className="icon" />
                      ) : (
                        <FaEyeSlash className="icon" />
                      )}
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      name="confirm"
                      className="input input-bordered"
                      id="password"
                      required
                    />
                  </div>
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
