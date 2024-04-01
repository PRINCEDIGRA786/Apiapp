import React, { useEffect } from 'react'
import { useState } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import ImageSlider from './Imageslider';
import {FaLocationDot} from 'react-icons/fa6';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import Footer from './Footer';
import Navbar from './Navbar';
import {  useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate();
    const images=[
        require('../photos/apipic/movie.png'),
        require('../photos/apipic/weather.png'),
        require('../photos/apipic/cars.jpg'),
        require('../photos/apipic/bikes.png'),
        require('../photos/apipic/ecommerce.jpg'),
        require('../photos/apipic/news.jpg'),
        // require('../photos/apipic/weather.webp')
    ];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      useEffect(()=>{
        localStorage.setItem('api-form',false)
      },[])
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
      };
  return (
    <>
    {/* top navabar */}
        <div className=' sticky px-8 top-0 justify-between flex z-40 text-white py-4  bg-[#383838]'>
            <div>
                <h1 className=' lg:text-2xl pt-1 text-xl font-alfa cursor-pointer' onClick={()=>navigate('/')}>ApiCustomizer</h1>
            </div>
            <div>
                
                 <Navbar/>
            </div>
        </div>
      <div>
        {/* full cod */}
        <div className='bg-[#383838] lg:flex lg:flex-row-reverse lg:justify-between'>
            <div className=' py-10 pt-16 lg:mr-20 relative lg:space-x-10 '>
                <div className=' hidden lg:block lg:bg-red-600/ 
                rounded-xl skew-x-6 h-72  w-60   '>
                    <img src="https://i.pinimg.com/originals/cb/ed/74/cbed748794a095b298b21bc520f4d60d.gif" className='h-[100%]
                     rounded-xl w-[100%] shadow-xl shadow-black border-[5px] border-white'/>

                </div>
                <div className='lg:absolute lg:top-12 lg:bottom-0  '>
                <img   src={require('../photos/topapi.gif')}  className=' shadow-2xl shadow-black
                mx-auto lg:mx-0 h-[50vw] w-[50vw] skew-x-6 lg:skew-x-0 lg:h-80 lg:w-80 lg:skew-y-6 rounded-xl
                  brightness-75 contrast-100 hover:contrast-125  border-[5px] border-black'/>
                </div>
            </div>

            <div className='mx-10 lg:mx-0 lg:pt-20'>
                <h1 className='text-white font-alfa text-xl py-5 lg:pl-40 '>CUSTOMIZE API BASED ON YOUR NEEDS</h1>
                <p className='text-md font-semibold 
                font-mono text-white py-4  lg:px-40'>
"Empower your development journey with ApiCustomizer – where innovation meets customization. Streamline your API development process, collaborate effortlessly, and unleash the full potential of your projects."</p>
                <div className=' py-7 text-white flex lg:pl-40 cursor-pointer group'>
                    <h1 className=' text-2xl text-red-500 font-extrabold group-hover:text-white ' onClick={()=>navigate('/apiform')}>Get Started</h1>
                    <HiOutlineArrowRight className='h-8 w-16 text-red-500 group-hover:text-white font-alfa '/>
                </div>
                <div className=' py-8 px-10 animate-bounce duration-1000'>
                    <HiOutlineArrowRight className='h-8 w-16 text-red-600 rotate-90'/>
                </div>
            </div>
        </div>

        <div className='bg-[#5c5b5b] py-10 text-white'>
            <h2 className='text-red-600 text-xl pl-32 py-4'>API's</h2>
            <h1 className=' text-2xl font-alfa pl-40 '>SOME API'S</h1>
            <ImageSlider images={images}/>
        </div>

        {/* api gif */}
        <div className='bg-black py-8 lg:pl-40 pl-10'>
            <h2 className='text-red-600 text-lg font-semibold py-8'>Codes</h2>
            <h1 className='text-white font-alfa'>API FETCH PROGRAMMING AVAILABLE :</h1>
            <div className='lg:flex-row pb-10  flex flex-col-reverse justify-evenly'>
                <div className='pt-10'>
                    <p className='text-[#808080] font-medium py-4 pr-6'>
                    For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language.
                    </p>

                <div>
                    <h1 className='text-white text-xl font-extrabold py-4'>JAVASCRIPT</h1>
                    <hr className='  w-96 lg:w-[40vw] outline-none font-extrabold bg-red-600 py-1 rounded-lg'/>

                    <h1 className='text-white text-xl font-extrabold py-5'>PYTHON</h1>
                    <hr className='  w-96 lg:w-[40vw] outline-none font-extrabold bg-red-600 py-1 rounded-lg'/>

                    <h1 className='text-white text-xl font-extrabold py-5'>CURL</h1>
                    <hr className='  w-96 lg:w-[40vw] outline-none font-extrabold bg-red-600 py-1 rounded-lg'/>

                    <h1 className='text-white text-xl font-extrabold py-5'>RUBY</h1>
                    <hr className='  w-96 lg:w-[40vw] outline-none font-extrabold bg-red-600  py-1 rounded-lg'/>

                    <h1 className='text-white text-xl font-extrabold py-5'>MORE AVAILABLE SOON.....</h1>
                   
                </div>
                </div>
                <div className='lg:mr-20 mr-10 py-7 lg:py-0  '>
                    <img src={require("../photos/api.gif")} className=' h-80 
                     lg:h-[35vw] rounded-xl shadow-xl shadow-[#808080] border-2 border-[#383838]'/>
                </div>
            </div>

        </div>

            
        {/* working period or api fetch free or paid box */}
        <div className='bg-[#5c5b5b] pl-10 py-10 lg:pl-40 pb-20'>

                <h2 className=' text-red-500 text-lg font-extrabold'>Timeline</h2>
                <h1 className='text-white font-alfa text-xl py-5'>API CONTENT LIMITS</h1>
                
                <div className='py-3'>
                    <div className=' space-y-2 md:flex md:justify-evenly py-4'>
                        <h2 className='text-lg font-semibold text-[#0e0505]'>Default - 10</h2>
                        <h2 className='text-lg text-white'>Ten elements are there</h2>
                        <h2 className='text-lg text-red-500 font-extrabold'>Five fields are there</h2>
                    </div>
                    <hr className='mr-10 lg:mx-32'/>
                    <div className=' space-y-2 md:flex md:justify-evenly py-4'>
                        <h2 className='text-lg font-semibold text-[#0e0505]'>Unsubscribed - max-30</h2>
                        <h2 className='text-lg text-white'>Max thirty elements are there</h2>
                        <h2 className='text-lg text-red-500 font-extrabold'>Ten fields can be there</h2>
                    </div>
                    <hr className='mr-10 lg:mx-32'/>
                    <div className=' space-y-2 md:flex md:justify-evenly py-4'>
                        <h2 className='text-lg font-semibold text-[#0e0505]'>Subscribed - 60</h2>
                        <h2 className='text-lg text-white'>Sixty elements are there</h2>
                        <h2 className='text-lg text-red-500 font-extrabold'>Twenty fields can be there</h2>
                    </div>
                    <hr className='mr-10 lg:mx-32'/>

                </div>
                
        </div>

        {/* for pricing */}
        <div className='bg-[#383838] py-8 lg:pl-40 pl-10'>
            <h2 className='text-red-600 text-lg font-semibold py-8'>Pricing</h2>
            <h1 className='text-white font-alfa'>API SUBSCRIPTION PRICING :</h1>
            <div className=' lg:flex-row pb-10  flex flex-col justify-evenly'>
                <div className='pt-10'>
                    <p className='text-[#808080] font-medium py-4 pr-6 lg:pr-20 '>
                    For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language.
                    </p>
                    </div>

                    <div className=' py-5 space-y-5 hover:cursor-pointer'>
                        <div className=' h-10 lg:w-[500px] pt-2 mr-10  group hover:bg-red-600 px-6 flex justify-between  rounded-xl text-white bg-[#808080]'>
                            <h1 className='text-extrabold font-alfa text-md'>Free-Unsbusribed</h1>
                            <h2 className=' text-red-700  group-hover:text-white text-xl font-alfa '>$0</h2>
                        </div>
                        <div className=' h-10 pt-2 mr-10  group hover:bg-red-600 px-6 flex justify-between  rounded-xl text-white bg-[#808080]'>
                            <h1 className='text-extrabold font-alfa text-md'>Simple Package</h1>
                            <h2 className=' text-red-700  group-hover:text-white text-xl font-alfa '>$9</h2>
                        </div>
                        <div className=' h-10 pt-2 mr-10  group hover:bg-red-600 px-6 flex justify-between  rounded-xl text-white bg-[#808080]'>
                            <h1 className='text-extrabold font-alfa text-md'>Medium-Package</h1>
                            <h2 className=' text-red-700  group-hover:text-white text-xl font-alfa '>$11</h2>
                        </div>
                        <div className=' h-10 pt-2 mr-10  group hover:bg-red-600 px-6 flex justify-between  rounded-xl text-white bg-[#808080]'>
                            <h1 className='text-extrabold font-alfa text-md'>Full-Subscription</h1>
                            <h2 className=' text-red-700  group-hover:text-white text-xl  font-alfa'>$21</h2>
                        </div>  </div>  </div>
        </div>

        {/* to get in contact or the login */}
        <div className='bg-[#676565] py-8 lg:pl-40 pl-10'>
            <h2 className='text-red-600 text-lg font-semibold py-8'>Contact</h2>
            <h1 className='text-white font-alfa'>GET IN TOUCH :</h1>
            <div className=' lg:flex-row pb-10  flex flex-col justify-evenly'>
                <div className='pt-10'>
                    <p className='text-white font-medium py-4 pr-6 lg:pr-20 '>
                    Please fill out the form on this section to login to the ApiCustomizer 12:00 a.m. and 12:00 p.m. ET, Monday through Sunday
                    </p>
                    <div className='py-4 space-y-6'>
                    <div className='flex'>
                        <FaLocationDot className='text-red-600 h-5 w-5'/>
                        <p className='text-white px-4 font-semibold text-sm'>SBSSU,Gurdaspur</p>
                    </div>
                    <div className='flex'>
                        <FaPhoneVolume className='text-red-600 h-5 w-5'/>
                        <p className='text-white px-4 font-semibold text-sm'>+8264295936</p>
                    </div>
                    <div className='flex'>
                        <MdEmail className='text-red-600 h-5 w-5'/>
                        <p className='text-white px-4 font-semibold text-sm'>digraprince7@gmail.com</p>
                    </div>
                    <div className='flex'>
                        <SiWebmoney className='text-red-600 h-5 w-5'/>
                        <p className='text-white px-4 font-semibold text-sm'>www.sbssu.gsp</p>
                    </div>

                    </div>
                    </div>
                    <div className="flex justify-center items-center my-8 lg:my-0 lg:mr-14">
      <form onSubmit={handleSubmit} className="w-96 border border-gray-300 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-transparent border-b-2 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-transparent border-b-2 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border-transparent border-b-2 focus:outline-none focus:border-gray-400"
          />
        </div>
        <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
          Login
        </button>
        <div className='flex space-x-2'>
        <p className='text-black text-sm font-extrabold py-4'>Don't have account?</p>
        <p className='text-red-800 hover:text-red-700 cursor-pointer text-sm py-4 font-extrabold'
        onClick={()=>navigate('/signup')}>Create new account</p>
        </div>
      </form>
    </div>


         </div>
        </div>
        <Footer/>

      </div>
    </>
  )
}
