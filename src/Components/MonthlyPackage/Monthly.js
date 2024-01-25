import React, { useEffect, useState } from "react";
import "../Home/styles.css";
import MonthlyPackageItem from "./MonthlyPackageItem";

const Monthly = () => {
  const [monthlyPackage, setMonthlyPackage] = useState([]);

    useEffect(() => {
      fetch('/monthlyPackage.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setMonthlyPackage(data);
        })
        .catch((error) => {
          console.error('Error fetching regular foods:', error);
        });
    }, []);
  return (
    <div className="mt-16">
      <div className="monthly-plan lg:py-[50px] py-6">
        <div className="py-10">
          <h1 className="text-4xl font-semibold font-space_grotesk text-center text-white">
            Our Monthly Plan
          </h1>
        </div>
        <div className=" lg:flex items-center justify-center gap-5 px-5 rounded-2xl ">
        {monthlyPackage.map((packageItem, index) => (
        <MonthlyPackageItem key={index} packageItem={packageItem} />
      ))}
        </div>
      </div>
    </div>
  );
};

export default Monthly;
