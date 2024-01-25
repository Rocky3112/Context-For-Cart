import React from "react";
import img1 from "../../images/healthy-food.png";
import img2 from "../../images/premium-quality.png";
import img3 from "../../images/fast-delivery.png";


const Reviews = () => {
  return (
    <div>
      <section className="text-center lg:w-[1250px] mx-auto lg:py-16 py-5">
        <div className="">
          <h1 className="text-4xl text-bold  mt-8 lg:text-5xl  font-space_grotesk">Why Choose Us</h1>
          <h3 className=" w-[350px] px-1 md:w-[700px] lg:w-[700px] mx-auto py-6  text-xl text-[#7E7E7D] font-montserrat">
            Looking for food web Design? We've collected the best examples of
            food website, web design.
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-3 font-montserrat">
          <div className="lg:w-[370px] lg:h-[400px] bg-[#E3E1F9] rounded  flex justify-center items-center ">
          <div className="mt-4 mb-4  md:mt-0 lg:mt-0 md:mb-0 lg:mb-0">
          <img
              className="mx-auto w-24 h-24 lg:w-28 lg:h-28 rounded-full mb-4"
              src={img1}
              alt=""
            />
            <h2 className="text-xl lg:text-3xl my-3 px-3 md:px-0 lg:px-0">Serve Healthy Food</h2>
            <p className="text-sm lg:text-base px-5">
              When an unknown printer took a galley of type and scrambled it to
              make a type
            </p>
          </div>
          </div>

          <div className=" lg:w-[370px] lg:h-[400px] bg-[#FFEA68] rounded flex justify-center items-center">
           <div className="mt-4 mb-4 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0">
           <img
              className="mx-auto w-24 h-24 lg:w-28 lg:h-28 rounded-full mb-4"
              src={img2}
              alt=""
            />
            <h2 className="text-xl lg:text-3xl my-3 px-3 md:px-0 lg:px-0">Best Quality</h2>
            <p className="text-sm lg:text-base px-5">
              When an unknown printer took a galley of type and scrambled it to
              make a type
            </p>
           </div>
          </div>

          <div className="lg:w-[370px] lg:h-[400px] bg-[#FEBF91] rounded flex justify-center items-center">
          <div className="flex items-center justify-center">
          <div className="mt-4 mb-4 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0">
          <img
              className="mx-auto w-24 h-24 lg:w-28 lg:h-28 rounded-full mb-4"
              src={img3}
              alt=""
            />
            <h2 className="text-xl lg:text-3xl my-3 px-3 md:px-0 lg:px-0">Fast Delivery</h2>
            <p className="text-sm lg:text-base px-5">
              When an unknown printer took a galley of type and scrambled it to
              make..
            </p>
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
