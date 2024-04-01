// YourReactComponent.jsx
import React, { useState,useContext, useEffect } from 'react';
import { IoCopy } from "react-icons/io5";
import Apicon from '../contextapi/Apicontext'
import { LuCopyCheck } from "react-icons/lu";
const YourReactComponent = () => {
    const[copy,setcopy]=useState(false);
    const context=useContext(Apicon);
    const{Api,getApi,apiData}=context;
    const [textToCopy, setTextToCopy] = useState("");

    useEffect(()=>{
    if(!Api){
      getApi(apiData.apiname,apiData.fields,apiData.number);
    }
  },[Api])



  const handleCopyClick = async() => {
    navigator.clipboard.writeText(JSON.stringify(textToCopy));
    setcopy(true);
    setTimeout(() => {
        setcopy(false);
    }, 2500);
  };
  useEffect(()=>{
    setTextToCopy(Api);
    // console.log(Api)
  },[])

  return (
    <div className="bg-[#1f1b1bcf] rounded-xl p-4 text-white pb-6 lg:pb-12">
        <div className='flex lg:space-x-4 space-x-2 pl-5 lg:pl-10 py-3'>
          <div className=' h-4 w-4 rounded-full bg-red-500'></div>
          <div className=' h-4 w-4 rounded-full bg-yellow-500'></div>
          <div className=' h-4 w-4 rounded-full bg-green-500'></div>
          </div>
      <div className="relative group">
        {/* Main text */}
        <div className=" text-white p-2 h-96 lg:h-[54vh] mx-2 lg:mx-10 bg-black 
        overflow-y-scroll border px-4 py-4 border-gray-300 rounded text-sm font-semibold
         overflow-hidden">
        <pre style={{ whiteSpace: 'pre-wrap' }}>{textToCopy}</pre>
        {
          textToCopy=="" && <h1 className='text-2xl my-5 mx-6 text-white font-extrabold animate-pulse'>
            Working on your Api.......
          </h1>
        }
        </div>

        {/* Copy button */}
      {  !copy && <IoCopy
          className="absolute h-10 w-10 top-[-40px] right-0 p-2 text-white cursor-pointer opacity- group-hover:opacity-100"
          onClick={handleCopyClick}
        >
          Copy
        </IoCopy>
}
        { copy && <LuCopyCheck className="absolute h-10 w-10 top-[-40px] right-0 p-2 text-white cursor-pointer opacity- group-hover:opacity-100"
          />}
      </div>
    </div>
  );
};

export default YourReactComponent;
