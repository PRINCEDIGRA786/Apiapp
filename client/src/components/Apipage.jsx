import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Copydiv from './Copydiv'
import { useNavigate } from 'react-router-dom'
import Apicon from '../contextapi/Apicontext'
import { useEffect,useState } from 'react';
import Alert from './Alert'
export default function Apipage() {
    const navigate=useNavigate();
    const context=useContext(Apicon);
    const{getapiLink,apidata}=context;
    // useEffect(()=>{
    //   if(!apidata){
    //     window.location.reaload();
    //   }
    // },[])
  
    useEffect(()=>{
      if(!localStorage.getItem('auth-token') ){
        // alert("Loged in required!! Please login first");
        setmessage("Please Login first to Customizer your own api.....");
        settitle("Login Required");
        settype("error")
        setShowAlert((last)=>{
          let newtext=true;
          return newtext;
        });

      }
      else{
        if( !localStorage.getItem('api-form')){
          // alert("Please first fill info what to customizer");
          setmessage("Please first fill first below what to customize.......");
          settitle("Fields Incomplete");
          settype("info")
          setShowAlert(true)
      }
      }
    },[])

    //Alert component useState:
    const [showAlert, setShowAlert] = useState(false);
    const[message,setmessage]=useState("");
    const[title,settitle]=useState("");
    const[type,settype]=useState("");

  return (
    <>
      <div className=' bg-black p-8 pb-0'>
        <div className=' bg-[#383838] rounded-lg pt-6'>
        <div className=' sticky px-8 top-0 justify-between flex z-40 text-white py-1  bg-[#383838]'>
            <div>
                <h1 className=' lg:text-2xl pt-1 text-xl font-alfa cursor-pointer' onClick={()=>navigate('/')}>ApiCustomizer</h1>
            </div>
            <div>
                
                 <Navbar/>
            </div>
        </div>
            <div className='text-center py-5'>
                <h1 className='text-3xl text-yellow-400 font-alfa'>{apidata.apiname} API</h1>
            </div>
            {/* <div className='h-[80vh] bg-black rounded-2xl mx-12 my-5'>
                texxt
            </div> */}
            <div className='lg:px-14 px-5 py-2'>

            <Copydiv/>
            </div>

            <div className='text-center py-5'>
                <button className='text-white hover:bg-green-700 
                text-xl font-alfa text-center px-4 w-60 bg-green-500 p-4
                rounded-xl' onClick={()=>{
                  getapiLink();
                  setTimeout(() => {
                    navigate('/linkpage')
                  }, 2000);
                }}>GET API LINK</button>
                    
            </div>
        <Footer/>
        </div>
      </div>
      {showAlert && (
        <Alert
          message={message}
          title={title}
          type={type}
         
          onClose={() =>{
            setShowAlert(false)
            if(!localStorage.getItem('auth-token')){
              navigate('/login')
            }
            if(!localStorage.getItem('api-form')){
              navigate('/apiform')
            }
          }
          }
        />
      )}
    </>
  )
}
