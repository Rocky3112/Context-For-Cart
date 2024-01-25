import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const RegularFoodItem = ({ regularFood, addToCart }) => {
  const handleClick = () => {
    addToCart(regularFood);
  };

  return (
    <div className="bg-white m-2 shadow-xl w-[163px] md:w-full lg:w-full p-2 rounded-lg">
      <div className="rounded-lg">
        <img
          className="h-32 lg:h-48 w-full object-cover"
          src={regularFood.imageUrl}
          alt={regularFood.name}
        />
      </div>

      <div className="px-2 py-2">
        <h2 className="text-xl text-[#1A873C] lg:text-2xl py-2 font-semibold">
          {regularFood.name}
        </h2>
        <h4 className="text-sm lg:text-base h-24 md:h-16 lg:h-16 font-montserrat">
          {regularFood.description1}
        </h4>
        <div className="flex justify-between items-center mt-1 gap-1">
          <h3 className="text-sm font-montserrat lg:text-xl font-semibold flex items-center">
            <TbCurrencyTaka /> {regularFood.offerPrice}
          </h3>
          <button
        onClick={handleClick}
        className="bg-[#00B860] hover:bg-[#115e38] px-2 lg:w-[140px] lg:px-3 py-2 lg:py-2 rounded-lg text-white text-sm lg:text-base transition-all font-montserrat"
      >
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
};

export default RegularFoodItem;
