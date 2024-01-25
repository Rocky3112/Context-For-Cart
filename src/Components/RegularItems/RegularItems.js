import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import RegularFoodItem from './RegularFoodItem';
import { Link } from 'react-router-dom';
import { useCart } from '../ContextProvider/CartProvider';


const RegularItems = () => {
  const [regularFoods, setRegularFoods] = useState([]);
  const { addToCart } = useCart();

    useEffect(() => {
      fetch('/regularFoods.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setRegularFoods(data);
        })
        .catch((error) => {
          console.error('Error fetching regular foods:', error);
        });
    }, []);

    return (
      <div className="regularItems pt-16">
        <section className=" lg:w-[1250px] mx-auto">
          <div className="flex justify-between items-center px-4 py-8 lg:px-8 lg:py-12">
            <div className="text-2xl lg:text-5xl font-space_grotesk font-semibold text-[#FFF] mb-4">
              <h1 className="shadow-2xl" >Our Regular Items</h1>
            </div>
            <div>
              <button className="flex items-center gap-2 lg:gap-4 text-lg lg:text-xl font-semibold text-white font-montserrat ">
                <Link className="flex items-center gap-2" to="/products">
                  {" "}
                  See All <FaArrowRight className="" />
                </Link>
              </button>
            </div>
          </div>
  
          <div className="pb-16 mt-3 ">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 px-1 lg:gap-3 md:gap-3">
            {regularFoods.map((regularFood, index) => (
              <RegularFoodItem key={index} regularFood={regularFood} addToCart={addToCart} />
            ))}
          </div>
          </div>
        </section>
      </div>
    );
}

export default RegularItems