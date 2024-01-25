
import { BiShoppingBag } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png'
import ActiveLink from './ActiveLink';
import { useCart } from "../ContextProvider/CartProvider";
import { useState } from "react";
import CartModal from "./CartModal";

const Navbar = () => {
  const { cart } = useCart();
  console.log(cart);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  return (
    <div className='bg-[#1A2521] opacity-95 font-montserrat  flex justify-center fixed w-full z-10 text-[#FFFFFF]'>
      <div className="max-w-[1250px] mx-auto navbar ">


        <div className="navbar-start flex items-center gap-4 font-bold">
          <img className='h[20px] w-[134px]' src={logoImg} alt="" />

        </div>

        <div className="navbar-end py-2">
          <ul className="menu font-monster menu-horizontal px-1 hidden lg:flex md:flex text-base ">
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/'>About us</ActiveLink>
            
            <Link className='mr-4 relative' ><button className="" onClick={() => setCartModalOpen(true)}><BiShoppingBag className='text-2xl' />
            <div className="absolute -bottom-2 right-1 badge text-[12px] h-5 text-[#FFF] border-0 bg-[#F26924]">{cart.length}</div>
            </button>
            </Link>
            <CartModal isOpen={isCartModalOpen} setIsOpen={setCartModalOpen} />
            
            <ActiveLink to='/login'><button className='bg-[#F26924] px-4 py-1 -mt-1 rounded-md text-center'>Sign in</button></ActiveLink>
          </ul>
          <div className='md:hidden lg:hidden px-3 '>


            <div className='flex items-center gap-2  '>
            <Link className='mr-4 relative' ><button className="" onClick={() => setCartModalOpen(true)}><BiShoppingBag className='text-2xl' />
            <div className="absolute -bottom-2 badge text-[12px] h-5 text-[#FFF] border-0 bg-[#F26924]">{cart.length}</div>
            </button>
            </Link>
            <CartModal isOpen={isCartModalOpen} setIsOpen={setCartModalOpen} />
             

              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=""><IoMdMenu className='text-2xl' /></div>
                <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-3  py-5 space-y-2  shadow bg-white  w-32 -mr-4 rounded-md ">
                <Link className='text-start flex  justify-end' to='/'>Home</Link>
                  <Link className='text-start flex  justify-end' to='/'>About us</Link>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>

  );
};

export default Navbar;