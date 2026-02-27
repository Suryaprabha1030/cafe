import React from "react";

function Footer() {
  return (
    <div className="w-full lg:h-1/2 bg-sub text-card font-default md:pt-5 md:pb-5   ">
      <footer className="w-full h-full flex flex-col lg:flex-row justify-center items-center  gap-10  lg:gap-20 text-md lg:text-lg pb-7">
        <span className="w-full mmd:w-auto pt-7 flex flex-col justify-center items-center max-sm:gap-2 gap-3 sm:gap-2 ">
          <p className="lg:text-xl text-lg font-semibold hover:text-logo">
            About Us
          </p>
          <p className="hover:text-logo">Story</p>
          <p className="hover:text-logo">FAQ</p>
          <p className="hover:text-logo">Careers</p>
        </span>
        <span className=" w-full mmd:w-auto flex flex-col justify-center items-center max-sm:gap-2  sm:max-lg:gap-2  gap-3">
          <p className=" lg:text-xl text-lg font-semibold hover:text-logo">
            Customer Resources
          </p>
          <p className="hover:text-logo">Order</p>
          <p className="hover:text-logo">Location</p>
          <p></p>
        </span>
        <span className=" w-full mmd:w-auto flex flex-col justify-center items-center max-sm:gap-2 gap-3 sm:max-lg:gap-2  md:pb-2">
          <p className="lg:text-xl text-lg font-semibold hover:text-logo">
            Services
          </p>
          <p className="hover:text-logo">Reservation</p>
          <p className="hover:text-logo">Paymental Options</p>
        </span>
        <span className="  w-full mmd:w-auto max-sm:pt-5 flex flex-col justify-center items-center max-sm:gap-2  gap-3">
          <p className="lg:text-lg text-md  font-semibold hover:text-logo">
            12th Street,Tadabad-coimbatore
          </p>
          <p className="lg:text-lg text-md font-semibold hover:text-logo">
            darkcafe@gmail.com
          </p>
          <p className="lg:text-lg text-md font-semibold hover:text-logo">
            +91 7845678932
          </p>
          <p className="lg:text-lg text-md font-semibold hover:text-logo">
            Social media
          </p>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
