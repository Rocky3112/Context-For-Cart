import React from 'react';
import delivery from "../../images/delivery.png";
import { TbCurrencyTaka } from "react-icons/tb";

const MonthlyPackageItem = ({ packageItem }) => {
  return (
    <div className="w-full px-6 lg:w-[440px] max-h-[570px] bg-white shadow-xl rounded-lg relative mb-8 lg:mb-0 p-6">
      <figure className="flex justify-center items-center bg-black relative">
        <span
          className="h-64 w-full object-cover rounded-lg"
          alt=""
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${packageItem.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
          }}
        ></span>
      </figure>
      <div className="mt-4 lg:mt-0">
        <div className="flex  lg:flex-row justify-between items-center py-3">
          <h1 className="lg:text-[24px] text-[16px] text-[#F26924] font-bold mb-2 lg:mb-0">{packageItem.name}</h1>
          <h3 className="lg:text-[20px] mt-[3px] font-semibold flex items-center">
            <TbCurrencyTaka />
            {packageItem.price}
            <small className="text-slate-500">/month</small>
          </h3>
        </div>
        <div className="py-3 lg:text-lg font-montserrat font-semibold">
          {packageItem.features.map((feature, featureIndex) => (
            <h2 className="lg:text-xl" key={featureIndex}>
              {feature}
            </h2>
          ))}
        </div>
        <div className="text-center my-6">
          <button className="uppercase bg-[#00B860] py-[12px] mx-auto rounded-lg text-white text-base w-[160px] font-montserrat">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="absolute right-8 top-10">
        <h2 className="bg-lime-400 font-bold font-montserrat px-2 py-1 w-24 text-center rounded-lg">
          {packageItem.offer}
        </h2>
      </div>
      <div className="absolute left-8 top-10">
        <h2 className="bg-white px-2 py-1 w-36 text-center rounded-lg text-amber-500 font-bold">
          <span className="flex items-center gap-1">
            <img className="w-4" src={delivery} alt="" />
            Delivery Free
          </span>
        </h2>
      </div>
    </div>
  );
};

export default MonthlyPackageItem;
