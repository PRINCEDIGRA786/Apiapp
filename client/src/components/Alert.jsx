import React, {  useState } from 'react';
import { BiSolidError } from "react-icons/bi";
import { TiInfo } from "react-icons/ti";

const Alert = ({ message, onClose,title,type }) => {
  const [visible, setVisible] = useState(true);
  
  const handleClose = () => {
    setVisible(false);
    onClose();
  };
 
  return (
    visible && (
      <div className="fixed top-5 left-[35%] max-w-xl h-60 flex items-center justify-center z-50">
        <div className=
{`bg-gray-800 bg-opacity-75 w-full h-52 flex rounded-xl absolute text-xl font-extrabold
 ${type=="error"?"text-red-600":"text-yellow-300"}  
pt-5 text-center font-alfa uppercase space-x-5 pl-10`}>
  <div>
  <BiSolidError className={`h-8 w-8 ${type==="error"?"text-red-600":"text-yellow-300"}`}/>

                    {/* <TiInfo className='h-4 w-4'/> */}
  </div>
<h1>
  {title}
</h1>

  </div>
        <div className="bg-gray-900 text-white rounded-lg mt-16 border border-white border-opacity-10 
        shadow-lg p-8 h-40 max-w-sm w-full z-50">
          <span className="absolute top-0 right-0 p-4 pr-3 text-3xl font-extrabold cursor-pointer" onClick={handleClose}>&times;</span>
          <p className='text-lg font-extrabold'>{message}</p>
        </div>
      </div>
    )
  );
};

export default Alert;
