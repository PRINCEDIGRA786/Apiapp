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
  const{createuser}=context;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    agreeTerms: false,
  });

  // for validation no field empty
  const isFormValid=()=>{
      const requiredFields = ['username', 'email', 'password', 'confirmPassword',"agreeTerms"];
      for (const field of requiredFields) {
        if (!formData[field]) {
          // Field is not filled
          // alert(`Please fill in the ${field} field.`,"danger");
          settitle("Fields Incomplete")
          setmessage("Please fill all the fields below.....");
          setShowAlert(true)
          return false;
        }
        else {
            if(formData['confirmPassword']!==formData['password']){
                // alert("CONFIRM PASSWORD NOT EQUAL TO Password");
                settitle("Password Invalid")
                setmessage("ConfirmPassword field is not same as the Password field......");
                setShowAlert(true)
                return false;
            }
        }
      }
      return true;

  }

  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      agreeTerms: !formData.agreeTerms,
    });
  };

  const navigate=useNavigate();

    // Fields for alert:
    const [showAlert, setShowAlert] = useState(false);
    const[message,setmessage]=useState("");
    const[title,settitle]=useState("")
    const[signuped,setsignuped]=useState(false);
    const[type,settype]=useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(formData);
    if( isFormValid()){
      var result=await createuser(formData);
      setsignuped(result)
      if(result){
        settitle("Signup Success")
        setmessage(" Successflly Signup-ed to Apicustomizer.....");
        setShowAlert(true)
       settype("info")
      }
      else{
        settitle("Error")
        setmessage("Email already exists ! Try another email.......");
        setShowAlert(true)
        settype("error")
      }

    }
  };

  return (
    <>
    <div className="bg-black py-7">
      <div className=" lg:max-w-xl max-w-[80%] bg-[#383838] shadow-md shadow-white rounded-3xl mx-auto">
        
      <div className=" py-1">
      <GiFlowerTwirl className="h-14 w-14 mx-auto text-red-700 my-5 "/>
      <h1 className="lg:text-2xl text-lg py-1  font-alfa text-red-600 text-center  ">ApiCustomizer SIGNUP</h1>

      </div>

    <div className="flex justify-center  text-white h-full pb-20  ">
      <form className="w-full max-w-md rounded-lg  px-8 py-4 " onSubmit={handleSubmit}
       >
        {/* Username */}
        {/* <h1 className=' text-xl font-extrabold text-center'>SIGNUP</h1> */}
        <div className="mb-2">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none text-black border rounded w-full py-2 px-3 
            leading-tight focus:outline-none focus:shadow-outline "
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none text-black border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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

        {/* Confirm Password */}
        <div className="mb-2">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border text-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2  text-sm text-white">
              I agree to the <span className="underline">Terms and Conditions</span>
            </span>
          </label>
        </div>
        <div className="text-md font-semibold my-2 text-white">
          Already have an account?<span className="text-red-600 hover:text-red-800 cursor-pointer"
          onClick={()=>navigate('/login')}> Login</span>
        </div>

        {/* Submit Button */}
        <div className="flex items-center py-4 justify-between">
          <button
            className="bg-red-500 hover:bg-red-600 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={isFormValid()}
            onClick={handleSubmit}
          >
            Sign Up
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
            if(signuped){
              navigate('/')
            }

          }
          }
        />
      )}
    </>
  );
};

export default SignUp;
