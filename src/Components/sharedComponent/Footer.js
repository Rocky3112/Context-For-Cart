import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import logoImg from '../../images/logo.png'


const Footer = () => {
  return (
    <div className="bg-[#1A2521]">
      <footer className=" lg:flex justify-between font-montserrat lg:w-[1250px] px-14 text-white gap-4 py-10">
        <div className=" w-64 pb-5">
          <h1 className="text-3xl font-bold uppercase text-amber-600">   <img className='h[20px] w-[134px]'  src={logoImg} alt="" /></h1>
          <h2 className="text-lg font-semibold py-5">Where can I get some?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero qui ab. Voluptatem molestiae, numquam illo non sit </p>
        </div>
        <div className=" w-64 pb-5">
          <h1 className="text-2xl font-bold ">Contact</h1>
          <p className="py-3 flex items-center gap-2"><BsTelephone /> +8801772 893112</p>
          <p className="flex items-center gap-2"><CiMail /> rocky@gmail.com</p>
          <p className="py-3 flex items-center gap-2"><CiLocationOn /> Kazla, Rajshahi</p>
        </div>
        <div className=" flex gap-10 ">
        <div className=" w-64 ">
          <h1 className="text-2xl font-bold">Menu</h1>
          <p className="py-3">Why choose us?</p>
          <p>Special Menus</p>
          <p  className="py-3">Regular Foods</p>
        </div>
        <div className=" w-64 ">
          <h1 className="text-2xl font-bold">Help</h1>
          <p className="py-3">Privacy</p>
          <p>Term & Conditions</p>
          
        </div>
        </div>
        
        
      </footer>
      <footer className="px-10 py-4 border-t  bg-[#1A2521] text-white border-base-300 text-center">
      <aside>
    <p>Design & developed by Rocky</p>
  </aside>
      </footer>
    </div>
  );
};

export default Footer;
