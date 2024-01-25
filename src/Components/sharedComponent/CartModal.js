import React from 'react';
import { useCart } from '../ContextProvider/CartProvider';

const CartModal = ({ isOpen, setIsOpen }) => {
    const { cart,clearCart,removeFromCart } = useCart();
    
  return (
    <div className=''>
        <dialog id="my_modal_2" open={isOpen} className="modal justify-end items-start lg:pt-16 pt-16 lg:pr-44">
      <div className="modal-box text-black lg:w-[500px] w-[350px]">
      <h2>Your Cart</h2>
        <ul>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div className="flex justify-between items-center gap-3">
                <img
                  src={item.imageUrl} 
                  alt={item.name}
                  className="lg:w-20 lg:h-20 w-10 h-10 object-cover rounded"
                />
                <span>{item.name}</span>
              </div>
              <span>${item.offerPrice}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-white btn btn-error">
                Remove
              </button>
            </div>
          ))}
        </ul>
        <button className='btn text-red-700' onClick={clearCart}>Clear Cart</button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setIsOpen(false)}>close</button>
      </form>
    </dialog>
    </div>
  );
};

export default CartModal;
