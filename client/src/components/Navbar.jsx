// import React from 'react'

// export default function Navbar() {
//   return (
//     <>
//     <div className='p-2 flex justify-evenly'>
//         <div className='flex'>
//             <h1 className='font-extrabold font-alfa text-2xl'>ApiCustomiZer</h1>
//             <p className=' text-red-600 font-extrabold text-2xl '>.</p>
//         </div>
//         <div>
//         <ul className='flex text-black font-extrabold text-md space-x-20 pt-1'>
//             <li className='hover:underline cursor-pointer '>Home</li>
//             <li className='hover:underline cursor-pointer '>About Us</li>
//             <li className='hover:underline cursor-pointer '>Contact</li>
//             <li className='hover:underline cursor-pointer '>Favourite</li>
//             <li className='hover:underline cursor-pointer '></li>
//         </ul>

//         </div>
//     </div>
      
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import {PiSignOutBold} from 'react-icons/pi'

const Navbar = () => {
  const[email,setemail]=useState("");
  const[username,setusername]=useState("")
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate=useNavigate();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const handleClick=async()=>{
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('auth-token')
            },
        });
        const json=await response.json();
        if(json){
          setusername(json.name)
          setemail(json.email)
        }
        else{
          handleClick();
        }

    }
useEffect(()=>{
  if(!username && localStorage.getItem('auth-token')){
    handleClick();
  }
},[username])

return (

    <nav className=" bg-[#383838] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="">
              <button onClick={toggleNavbar} type="button" className="text-white ">
                <svg
                  className="lg:w-8 lg:h-8 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isExpanded ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            {/* <div className="hidden md:block">
              <a href="#" className="text-xl font-bold">
                Logo
              </a>
            </div> */}
          </div>
          <div className={`${isExpanded ? 'flex' : 'hidden'} 
           `}>
            <div className="lg:flex-row flex z-50   bg-[#383838] lg:top-0 lg:left-0 absolute top-14 lg:py-0 py-8 left-2 lg:relative flex-col 
               pr-[60vw] lg:pr-0 pl-5 lg:pl-0 md:mt-0 font-semibold space-y-3 lg:space-y-0">
              <h2  className="block cursor-pointer hover:text-red-500 px-4 py-0" onClick={()=>navigate('/')}>Home</h2>
              <h2  className="block cursor-pointer hover:text-red-500 px-4 py-0" onClick={()=>navigate('/about')}>About Us</h2>
              <h2  className="block cursor-pointer hover:text-red-500 px-4 py-0" onClick={()=>navigate('/dashboard')}>Dashboard</h2>
              <h2  className="block cursor-pointer hover:text-red-500 px-4 py-0" onClick={()=>navigate('/apiform')}>Api's</h2>
              <div className='flex space-x-3 phone:space-x-1 group cursor-pointer  duration-500'>
                <FaUserAlt className='text-white h-5 w-5 group-hover:h-7 
                group-hover:w-7 group-hover:bg-[#585858] phone:h-3 phone:w-3
                 hover:rounded-sm '/>
                <p className='text-white text-sm font-extrabold phone:text-xs'>
                    {username}
                </p>
                <div className='bg-[#383838] opacity-90 z-50  w-48 h-40 md:w-80 absolute hidden 
                 group-hover:block 
                right-[5%] top-[10%]'>
                        <div className=' bg-[#181818] z-50 text-center
                         py-2 mx-auto block border-b-4 border-slate-200'>
                           
                            <FaUserAlt className='text-white rounded-full
                             h-10 w-10 mx-auto border-2 border-white '/>
                            <p className='  text-lg font-sans text-center
                             text-white'>{username}</p>
                            <p className='text-center text-xs font-semibold 
                            lg:text-lg font-sans text-white '>{email}</p>
                        </div>
                        <div className='py-2 px-5 space-y-3'>
                            <p className='font-semibold text-md text-white hover:bg-slate-900 flex space-x-4'
                            onClick={()=>{
                                localStorage.removeItem('auth-token');
                                // window.location.reload();
                                navigate('/')
                            }}><PiSignOutBold className='text-white h-4 w-4 mr-2 mt-1'/> Sign out</p>
                        </div>
                </div>

                    </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
