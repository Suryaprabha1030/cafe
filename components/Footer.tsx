import React from "react";

function Footer() {
  return (
    <div className="w-full h-1/2 bg-sub text-card font-default pt-5 pb-5   ">
      <footer className="w-full h-full flex flex-col md:flex-row justify-center items-center  gap-10  lg:gap-20 text-md md:text-lg pb-7">
        <span className="w-full mmd:w-auto pt-7 flex flex-col justify-center items-center gap-3">
          <p className="md:text-xl text-lg font-semibold hover:text-logo">
            About Us
          </p>
          <p className="hover:text-logo">Story</p>
          <p className="hover:text-logo">FAQ</p>
          <p className="hover:text-logo">Careers</p>
        </span>
        <span className=" w-full mmd:w-auto flex flex-col justify-center items-center gap-3">
          <p className=" md:text-xl text-lg font-semibold hover:text-logo">
            Customer Resources
          </p>
          <p className="hover:text-logo">Order</p>
          <p className="hover:text-logo">Location</p>
          <p></p>
        </span>
        <span className=" w-full mmd:w-auto flex flex-col justify-center items-center gap-3 pb-2">
          <p className="md:text-xl text-lg font-semibold hover:text-logo">
            Services
          </p>
          <p className="hover:text-logo">Reservation</p>
          <p className="hover:text-logo">Paymental Options</p>
        </span>
        <span className="  w-full mmd:w-auto pt-5 flex flex-col justify-center items-center gap-3">
          <p className="md:text-lg text-md  font-semibold hover:text-logo">
            12th Street,Tadabad-coimbatore
          </p>
          <p className="md:text-lg text-md font-semibold hover:text-logo">
            darkcafe@gmail.com
          </p>
          <p className="md:text-lg text-md font-semibold hover:text-logo">
            +91 7845678932
          </p>
          <p className="md:text-lg text-md font-semibold hover:text-logo">
            Social media
          </p>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
