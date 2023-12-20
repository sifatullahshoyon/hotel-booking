import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section>
        <div className="banner">
          <div className="content container mx-auto flex flex-col justify-center h-screen p-5">
            <h1 className="text-3xl md:text-7xl font-medium tracking-wide leading-tight title-text pb-5">
              Welcome To Our <br /> Luxury Hotel
            </h1>
            <p className="md:text-xl tracking-wide leading-snug pb-5 w-6/12">
            Luxury hotels often embody opulence, offering a combination of lavish amenities, exceptional service, and a focus on providing guests with an exclusive, indulgent experience. Here's a description of a fictional luxury hotel.
            </p>
            <div>
              <button className="btn btn-primary text-white">Learn More</button>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1703058761">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
