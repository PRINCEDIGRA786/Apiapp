import Navbar from './Navbar';
import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Apicon from '../contextapi/Apicontext';
export default function Dashboard() {
    const navigate=useNavigate();
    const context=useContext(Apicon);
    const{dashboard}=context;
    const[profession,setprofession]=useState("Student");
    const[requiredfor,setrequiredfor]=useState("self");
    const [image, setImage] = useState(null);
    const[edit,setedit]=useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const imageData = new FormData();
        imageData.append('file', image);
        imageData.append('upload_preset', 'portfolio');
        imageData.append('cloud_name',"portfoli");

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/portfoli/image/upload', {
                method: 'POST',
                body: imageData,
            });

            const data = await response.json();
            await setImage(data.secure_url);
            alert("Uploaded ----");
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    const[email,setemail]=useState("");
    const[username,setusername]=useState("")
    const[prof,setprof]=useState("");
    const[req,setreq]=useState("");
   
    const handleClick=async()=>{
      const response = await fetch("https://apiapp-backend.vercel.app/api/auth/getuser", {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                  "Content-Type": "application/json",
                  "auth-token":localStorage.getItem('auth-token')
              },
          });
          const json=await response.json();
          setusername(json.name)
          setemail(json.email);
          setprof(json.profession);
          setreq(json.requiredfor);
          setImage(json.profilepic);
      }
  useEffect(()=>{
    handleClick();
  },[])

  const handleProfessionChange = (event) => {
    const selectedProfession = event.target.value; // Get the selected value
    setprofession(selectedProfession); // Update the state with the selected profession
  };

  const handlerequireChange = (event) => {
    const selectedreq = event.target.value; // Get the selected value
    setrequiredfor(selectedreq); // Update the state with the selected profession
  };


    return (
        <div className="bg-gradient-to-b bg-black min-h-screen
         flex justify-center items-center pt-10">
            <div className="lg:max-w-6xl w-[80%] px-6 lg:px-10 pb-10 rounded-lg shadow-xl bg-[#383838] relative z-10">
            <div className=' sticky px-3 lg:px-8 top-0
             justify-between flex z-40 text-white py-4 
              bg-[#383838]'>
            <div>
                <h1 className=' lg:text-2xl pt-1 text-xl 
                font-alfa text-white cursor-pointer' 
                onClick={()=>navigate('/')}>ApiCustomizer</h1>
            </div>
            <div>
                
                 <Navbar/>
            </div>
        </div>
                <div className='flex space-x-3 flex-col space-y-5 items-center'>
                    <label htmlFor="profileImage" className="cursor-pointer">
                        <div className="lg:w-60 lg:h-60 h-40 w-40 rounded-full flex justify-center items-center bg-gray-300">
                            {image ? (
                                <img src={image} alt="Profile" className="w-[100%] h-[100%]  rounded-full" />
                            ) : (
                                <FaUserAlt className="text-6xl text-gray-600" />
                            )}
                        </div>
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        accept="image/*"
                        disabled={(image)?true:false}
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <button className='p-2  bg-green-400 text-xs font-extrabold' onClick={handleImageUpload}>Upload</button>
                </div>

                <div className='flex-col   flex space-y-5 lg:justify-center lg:space-y-0 lg:flex-row lg:space-x-40 text-white py-4'>

                {/* Name-email */}
                <div className=' bg-[#585858] h-32 mx-auto lg:mx-0 lg:h-40 w-60 lg:w-80 p-5 shadow-lg shadow-white rounded-xl'>
                    <h1 className='text-xl font-alfa  text-[#383838] pl-4'>Name</h1>
                    <p className=' py-6 pl-8 lg:pt-10 pt-5 text-sm lg:text-lg font-extrabold'>{username}</p>

                </div>
                <div className=' bg-[#585858] h-32 mx-auto lg:mx-0 lg:h-40 w-60 lg:w-80 p-5 shadow-lg shadow-white rounded-xl'>
                    <h1 className='text-xl font-alfa  text-[#383838] pl-4'>Email</h1>
                    <p className=' py-6 pl-8 lg:pt-10 pt-5 text-sm lg:text-lg font-extrabold'>{email}</p>

                </div>
                </div>


            <div className='flex-col flex space-y-5 lg:space-y-0 lg:justify-center lg:flex-row lg:space-x-40 text-white py-4'>

            {/* Profession */}
            <div className=' bg-[#585858] h-32 mx-auto lg:mx-0 lg:h-40 w-60 lg:w-80 p-5 shadow-lg shadow-white rounded-xl'>
                <h1 className='text-xl font-alfa  text-[#383838] pl-4'>Profession</h1>
                {
                   !edit && <p className=' py-6 pl-8 lg:pt-10 pt-5 text-sm lg:text-lg font-extrabold'>{prof}</p>}
                   {
                   edit &&
                   <div>
                     <label htmlFor="profession">Choose your profession:</label>

                   <select id="profession" 
                   className=' block mx-auto w-40 my-3 text-black text-sm rounded-xl p-2 font-extrabold'
                   value={profession}
                   onChange={handleProfessionChange}>
                     <option value="Student">Student</option>
                     <option value="Developer"  >Developer</option>
                     <option value="Others">Others</option>
                   </select></div>}

            </div>
            <div className=' bg-[#585858] h-32 mx-auto lg:mx-0 lg:h-40 w-60 lg:w-80 p-5 shadow-lg shadow-white rounded-xl'>
                <h1 className='text-xl font-alfa  text-[#383838] pl-4'>Required for</h1>
                {
                   !edit && <p className=' py-6 pl-8 lg:pt-10 pt-5 text-sm lg:text-lg text-white font-extrabold'>{req}</p>}
                   {
                   edit &&
                   <div>
                     <label htmlFor="required">Why required? :</label>

                   <select id="required" 
                   className=' block mx-auto w-40 my-3 text-black text-sm rounded-xl p-2 font-extrabold'
                   value={requiredfor}
                   onChange={handlerequireChange}>
                     <option value="Self"  >Self</option>
                     <option value="Organization">Organization</option>
                     <option value="Others">Others</option>
                   </select></div>}

            </div>
            </div>

            <div className='flex justify-evenly pt-16 text-lg font-extrabold'>
                <button className='p-3 bg-blue-400 rounded-xl' onClick={()=>setedit(true)}>Edit</button>
                <button className='p-3 bg-green-400 rounded-xl disabled:bg-green-50'
                disabled={!edit}  onClick={()=>{
                    dashboard(requiredfor,profession,image);
                    navigate('/');
                }}>Submit</button>
            </div>
            </div>
        </div>
    );
}
