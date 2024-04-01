import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    {/* <footer className="bg-[#2da1a1] text-white p-4 rounded-t-3xl">
      <div className="container  mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-xl font-alfa">ApiCustomiZer.</h3>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram size={35} className=' text-pink-600 hover:text-pink-900' />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook size={35} className=' text-blue-600 hover:text-blue-900' />
          </a>
          <a href="mailto:info@apicustomizer.com" className="text-white hover:text-gray-300">
            <FaEnvelope size={35} className=' text-red-500 hover:text-red-700'/>
          </a>
        </div>
      </div>
      <hr className='mt-3'></hr>
      <div className='text-center'>
        <div className='py-5'>
          <h1 className='text-lg font-alfa'>Sign up for Api's</h1>
        </div>
        <div className='py-3'>

        <input type="text" className=' border-[1px]  border-slate-200 p-2 w-80 bg-transparent bg-[#35b4b4]
        placeholder:text-slate-700 font-semibold text-black outline-none focus:border-2 rounded-lg'
        placeholder='Email Address'/>
        </div>
        <div className='py-3'>
          <button className='p-2 text-center font-semibold rounded-lg shadow-lg shadow-blue-900 px-4 hover:bg-blue-900 bg-blue-700'>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
      <div className='h-10 bg-[#123d3d] text-center pt-3'>
        <p className='text-white font-semibold'>© 2023 Copyright:ApiCustomiZer.</p>
      </div> */}




<footer className="bg-black text-white p-4 ">
      <div className="container  mx-auto flex items-center justify-between">
        <div>
          <h3 className=" text-xs sm:text-sm font-alfa">+© 2023 Copyright:ApiCustomiZer.</h3>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram size={25} className=' /text-pink-600 hover:text-pink-900' />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook size={25} className=' /text-blue-600 hover:text-blue-900' />
          </a>
          <a href="mailto:info@apicustomizer.com" className="text-white hover:text-gray-300">
            <FaEnvelope size={25} className=' /text-red-500 hover:text-red-700'/>
          </a>
        </div>
      </div>
      
     
    </footer>

      </>
  );
};

export default Footer;
