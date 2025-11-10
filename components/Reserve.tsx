import React from "react";

const Reserve = () => {
  return (
    <div className="container mx-auto max-w-full bg-primary flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-40 ">
      <section className="w-5/6  lg:w-1/3 md:w-3/4 ">
        <h1 className="text-logo font-logo w-full text-5xl md:text-6xl font-bold pb-5 text-center">
          Reservation Here
        </h1>
        <form className=" bg-bgimg  w-full flex flex-col gap-6 pt-5 items-center  rounded-xl pb-10 border-card border-4">
          <h1 className=" text-3xl md:text-4xl font-bold text-card font-default mx-auto">
            Enter Details
          </h1>
          <input
            className="w-3/4 h-10 outline-none p-3 text-md  bg-white text-black md:text-lg font-default rounded-lg"
            placeholder="Date"
          />

          <span className="w-3/4 h-10 flex gap-5">
            <input
              className="w-1/2 h-full outline-none p-3 bg-white text-black text-md md:text-lg font-default rounded-lg"
              placeholder="Time"
            />
            <input
              type="number"
              className="w-1/2  h-full outline-none p-3 text-md   bg-white text-black md:text-lg font-default rounded-lg"
              placeholder="Guest"
            />
          </span>
          <input
            className="w-3/4 h-10 outline-none p-3  text-md md:text-lg  bg-white text-black font-default rounded-lg"
            placeholder="Your Name"
          />
          <input
            className="w-3/4 h-10 outline-none p-3 text-md md:text-lg  bg-white text-black font-default rounded-lg"
            placeholder="Your phone"
          />
          <span className="w-3/4 h-10 flex gap-5">
            <input
              className="w-3/4 h-full outline-none p-3 text-md md:text-lg bg-white text-black font-default rounded-lg"
              placeholder="Your Email"
            />
            {/* <button className='w-1/3 h-full text-xl border-2 rounded-lg border-secondary text-card'>Reserve</button> */}
            <button className="w-1/3 h-full text-lg md:text-xl border-2 rounded-lg border-secondary  text-card">
              Reserve
            </button>
          </span>
        </form>
      </section>
      <section className=" w-5/6 lg:w-1/3 md:w-3/4  ">
        <h1 className="text-logo font-logo w-full text-5xl  md:text-6xl font-bold pb-5 text-center ">
          Location Here
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749179518!2d77.30126246150186!3d12.954459536902316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712068918336!5m2!1sen!2sin"
          className="w-full "
          height="420"
          style={{ border: 0 }}
          title="map"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Reserve;
