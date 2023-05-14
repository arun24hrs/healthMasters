import React from "react";
import appleIcon from "../Images/apple_icon.png";
import playStore from "../Images/playStore.png";
import logo from "../Images/qf_logo.png"

const Footer = () => {
  return (
    <div className="flex flex-row mt-20 bg-pale-green py-16 gap-20">
      {/* <h3 className='text-core-green text-4xl font-medium'>Be socially and physically active.</h3> */}
      <div className="flex flex-col gap-4 w-1/2 items-center">
      <div className="flex flex-row gap-2 mb-2 ">
        <img src={logo} className="w-20 "/>
        <text className="text-2xl font-bold items-center self-center">QuickFit</text>
      </div>
        <div className="flex flex-row gap-5 border border-black justify-center items-center w-48 h-12 rounded-lg hover:rounded-3xl duration-300">
          <img src={appleIcon} className="h-6" />
          <text className="font-medium text-md">Soon on iOS</text>
        </div>
        <div className="flex flex-row gap-5 border border-black justify-center items-center w-48 h-12 rounded-lg hover:rounded-3xl duration-300">
          <img src={playStore} className="h-6" />
          <text className="font-medium text-sm">Soon on PlayStore</text>
        </div>
      </div>
      <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-6 self-end text-left">
        <a href="#" className="text-sm font-medium hover:text-core-green">Blog</a>
        <a href="#" className="text-sm font-medium hover:text-core-green">Premium Plans</a>
        <a href="#" className="text-sm font-medium hover:text-core-green">Goal Tracking</a>
        <a href="#" className="text-sm font-medium hover:text-core-green">Community</a>
        <a href="#" className="text-sm font-medium hover:text-core-green">Our Goal</a>
      </div>
      <div className="flex flex-col self-end text-left">
        <h2 className="font-medium">Contact Us:</h2>
        <text className="w-52">{"Plot no. 3B, Sector-4, Demo Nagar, Dwarka, Sector-17, \n New Delhi-110075 "}</text>
        <h2>{"Call us: +91-9868494572"}</h2>
      </div>
      </div>
    </div>
  );
};

export default Footer;
