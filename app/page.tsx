"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reserve from "@/components/Reserve";
import Services from "@/components/Services";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-auto bg-primary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Navbar />

      {/* Sections with IDs for scrolling */}
      <div
        id="home"
        className="w-full flex flex-col items-center justify-center  pt-40 mt-5"
      >
        <Banner />
      </div>

      <div id="about" className="w-[100%]  flex flex-col  pt-20 ">
        <About />
      </div>
      <div id="services" className="w-[100%] flex flex-col pt-10">
        <Services />
      </div>
      <div id="reserve" className="w-[100%]  flex flex-col pt-20 mb-10">
        <Reserve />
      </div>
      <Footer />
      {/* <div id="venue" className="w-full h-screen flex flex-col bg-white mt-20">
      <ShowCase/>
    </div> */}
    </div>
  );
};

export default Page;
