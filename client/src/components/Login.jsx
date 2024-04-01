// SignUp.js

import { RiEyeCloseFill } from "react-icons/ri";
import React, { useContext, useState } from 'react';
import { BsFillEyeFill } from "react-icons/bs";
import { GiFlowerTwirl } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Apicon from "../contextapi/Apicontext";
import Alert from "./Alert";
const SignUp = () => {
  // Request for the signup...
  const context=useContext(Apicon);
  const{login}=context;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  // Fields for alert:
  const [showAlert, setShowAlert] = useState(false);
  const[message,setmessage]=useState("");
  const[title,settitle]=useState("");
  const[type,settype]=useState("");

  // for validation no field empty
  const isFormValid=()=>{
      const requiredFields = [ 'email', 'password'];
      for (const field of requiredFields) {
        if (!formData[field]) {
          // Field is not filled
          // alert(`Please fill in the ${field} field.`,"danger");
          settitle("Fields Incomplete")
          setmessage("Please fill all the fields below.....");
          setShowAlert(true);
          settype("error")
          return false;
        }
      }
      return true;

  }
  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const[logedin,setlogedin]=useState(false)
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(formData);
    if( isFormValid()){
      var result=await login(formData);
      setlogedin(result)
      if(result){
        settitle("Logged In")
        setmessage("ApiCustomizer Successflly logged in");
        setShowAlert(true);
        settype("info")
       
      }
      else{
        settitle("Error")
        setmessage("email or password is incorrect Please enter correct one");
        setShowAlert(true);
        settype("error")
      }

    }
  };

  return (
    <>
    <div className="h- bg-black py-5">
      <div className=" max-w-96 lg:max-w-xl bg-[#383838] shadow-md shadow-white
      rounded-3xl mx-auto">


      <div className="  py-1">
      <GiFlowerTwirl className="h-16 w-16 mx-auto text-red-700 my-9"/>
      <h1 className="lg:text-2xl text-lg pb-6  font-alfa text-red-600
       text-center  ">ApiCustomizer LOGIN</h1>

      </div>

    <div className="flex justify-center  text-white h-full rounded-b-3xl pb-20 bg-[#373737] ">
      <form className="w-full max-w-md  rounded-lg  px-8 py-4 " onSubmit={handleSubmit}>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none text-black border rounded w-full py-2 px-3
             leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type={formData.showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-black"
              onClick={togglePasswordVisibility}
              >
              {formData.showPassword ? (
                  <BsFillEyeFill className="h-4 w-4"/>
                  ) : (
                      <RiEyeCloseFill className="h-4 w-4"/>
                      )}
            </div>
          </div>
        </div>

       

        <div className="text-sm font-semibold my-5 text-slate-100">
         Create a new account?<span className="text-red-600 hover:text-red-800 cursor-pointer"
          onClick={()=>navigate('/signup')}> Signup</span>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-red-500 hover:bg-red-800 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={isFormValid()}
            onClick={handleSubmit}
          >
            Login
          </button>
          
        </div>
      </form>
    </div>
    </div>
            </div>
            {showAlert && (
        <Alert
          message={message}
          title={title}
         type={type}
          onClose={() =>{
            setShowAlert(false);
            if(logedin){
              navigate('/');
            }
          }
          }
        />
      )}
    </>
  );
};

export default SignUp;
