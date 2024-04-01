 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { GiFlowerTwirl } from 'react-icons/gi';

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-b bg-black min-h-screen flex justify-center items-center">
            <div className="max-w-6xl px-10 pb-10 rounded-lg shadow-xl bg-[#383838] relative z-10">
                <div className='sticky px-8 z-50 top-0 justify-between flex text-white py-6 bg-[#383838]'>
                    <div>
                        <h1 className='lg:text-2xl pt-1 text-xl font-alfa cursor-pointer' onClick={() => navigate('/')}>ApiCustomizer</h1>
                    </div>
                    <div>
                        <Navbar />
                    </div>
                </div>
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <GiFlowerTwirl className="h-60 w-60 text-red-900 contrast-200 brightness-100" />
                </div>
                <div className="relative z-10">
                    <p className="text-lg text-slate-100 font-semibold mb-6">
                        ApiCustomizer is a versatile tool designed to empower developers by providing the flexibility of customizing APIs according to their specific needs. Whether you're building a web application, mobile app, or any other software solution, ApiCustomizer allows you to tailor APIs to fit seamlessly into your project architecture.
                    </p>
                    <p className="text-lg text-slate-100 font-semibold mb-6">
                        With ApiCustomizer, you can define API endpoints, modify data formats, and integrate various third-party services effortlessly. Our intuitive interface and comprehensive documentation make the customization process smooth and efficient, enabling you to focus on building exceptional products.
                    </p>
                    <p className="text-lg text-slate-100 font-semibold mb-6 ">
                        Whether you're a seasoned developer or just starting your journey, ApiCustomizer simplifies the API customization process, saving you time and effort. Join our community today and unlock the full potential of your APIs with ApiCustomizer.
                    </p>
                </div>
                <div id='page' className='m-4 my-4 flex flex-col md:flex-row md:space-x-3 space-around'>
     <div className=' mx-auto md:mx-0 m-4 border-2 border-[#383838] p-3 w-[90%] h-[30%] sm:w-[40%] shadow-lg
      shadow-black sh rounded-2xl text-white bg-gradient-to-tr from-[#808080] to-black hover:bg-[#383838]'>
      <h2 className='text-center font-extrabold fold:text-md folld:text-xl font-alfa text-red-800 text-sm sm:text-2xl'> OUR VISION</h2>
      <ul className=' list-outside list-disc m-4 p-2'>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of Api production.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the bestes Api.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide better services.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the best Api's available.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the good Api's at minimum costs.</li>
      </ul>
     </div>
     <div className='mx-auto md:mx-0 m-4 border-2 border-[#383838] p-3 w-[90%] h-[30%] sm:w-[40%] shadow-lg 
     shadow-black sh rounded-2xl text-white bg-gradient-to-br from-[#808080] to-black hover:bg-[#383838]'>
      <h2 className='text-center font-extrabold text-red-800 font-alfa fold:text-md folld:text-xl text-sm sm:text-2xl'> OUR GOALS</h2>
      <ul className=' list-outside list-disc m-4 p-2'>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the bestes Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide better Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the best Api's available.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the good Api's at minimum costs.</li>
      </ul>
     </div>
     <div className='mx-auto md:mx-0 m-4 border-2 border-[#383838] p-3 w-[90%] h-[30%] sm:w-[40%] shadow-lg shadow-black sh rounded-2xl text-white bg-gradient-to-tr from-[#808080] to-black hover:bg-[#383838]'>
      <h2 className='text-center font-extrabold fold:text-md text-red-800 folld:text-xl font-alfa text-sm sm:text-2xl'> OUR SERVICES</h2>
      <ul className=' list-outside list-disc m-4 p-2'>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the bestes Api's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide better services.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the best Api's available.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the good Api's at minimum costs.</li>
      </ul>
     </div>
     </div>
            </div>
        </div>
    );
};

export default AboutPage;


