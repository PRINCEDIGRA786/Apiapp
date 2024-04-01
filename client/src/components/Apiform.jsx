import React, { useState ,useEffect, useContext} from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Apicon from '../contextapi/Apicontext';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
export default function Apiform() {
  const context=useContext(Apicon);
  const navigate=useNavigate();
  const{getApi,apiData}=context;
  const [inputValue, setInputValue] = useState('');
  const [inputFields, setInputFields] = useState(["","","",""]);
  const [placeholder, setPlaceholder] = useState('');
  // const[correctinput,setcorrect]=useState(true)
  const words = ['EEnter', ' ', 'the',' ', 'API name ' ,' ',' for e.g. Movies , Ecommerce .... '];
  // const words=" "
  const handleChange =async (e) => {
     setInputValue(e.target.value)
  };
  const addInputField = () => {
    setInputFields((inputFields) => [...inputFields, '']);
};
useEffect(()=>{
  vocabcheck(inputValue)
},[inputValue])

const handleInputChange = (index, value) => {
  const newInputFields = [...inputFields];
  newInputFields[index] = value;
  setInputFields(newInputFields);
};

//for line slider:
const [value, setValue] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (loggedIn && newValue <= 30) {
      setValue(newValue);
    } else if (!loggedIn) {
      alert('You are not logged in.');
    } else {
      alert('Maximum value allowed is 30.');
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const[message,setmessage]=useState("");
  const[title,settitle]=useState("")
// for other:
  useEffect(() => {
    if(!localStorage.getItem('auth-token')){
      // alert("Please Login first to Customizer your own api");
      setmessage("Please Login first to Customizer your own api.....");
      settitle("Login Required")
      setShowAlert(true)

    }
     else{
       setLoggedIn(true)

     } 
    let wordIndex = 0;
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setPlaceholder((prev) => prev + words[wordIndex][charIndex]);

      if (charIndex === words[wordIndex].length - 1) {
        if(wordIndex==words.length-1){
          setPlaceholder(" ");
        }
        else{
          wordIndex++;
          charIndex=0;

        }
      } else {
        charIndex += 1;
      }
    }, 200);

    // setPlaceholder("Enter the API name for e.g. Movies , Ecommerce....")
    return () =>{
      clearInterval(typingInterval);
    } 
  },[]);
  

  // To check whether Grammatically correct or not :
  const [isGrammaticallyCorrect, setIsGrammaticallyCorrect] = useState(true);
  const vocabcheck=(inputValue) => {
    const checkGrammar = async () => {
      try {
        // console.log(inputValue)
        const response = await fetch(
          `https://languagetool.org/api/v2/check?text=${encodeURIComponent(
            inputValue
          )}&language=en-GB`,
          {
            method: 'POST',
          }
        );

        const data = await response.json();

        if (data.matches && data.matches.length > 0) {
          setIsGrammaticallyCorrect(false);
        } else {
          setIsGrammaticallyCorrect(true);
        }
      } catch (error) {
        console.error('Grammar check failed:', error);
      }
    };

    if (inputValue) {
      checkGrammar();
    } else {
      setIsGrammaticallyCorrect(true);
    }
  }

  return (
    <>
      <div className=' bg-[#030101] lg:p-6 p-3 px-3  lg:px-8  pb-0'>
        <div className=' bg-[#383838] rounded-lg shadow-2/xl shadow-white text-white pt-6 '>
        <div className=' sticky px-8 top-0 justify-between flex z-40 text-white py-1  bg-[#383838]'>
            <div>
                <h1 className=' lg:text-2xl pt-1 text-xl font-alfa cursor-pointer' onClick={()=>navigate('/')}>ApiCustomizer</h1>
            </div>
            <div>
                
                 <Navbar/>
            </div>
        </div>

          <div className='text-center py-8'>
            <h1 className='lg:text-[8vh] text-2xl font-alfa '>CUSTOMIZE YOUR OWN API</h1>
          </div>

          <div className='flex justify-evenly py-5'>
          <img src={require("../photos/api3.png")} className=' h-20 lg:h-40 w-20 lg:w-40 skew-y-2 border-[5px]  shadow-lg shadow-black hover:skew-y-[-10px] border-black rounded-sm mt-5 brightness-75 contrast-200'/>
          <img src={require("../photos/api1.png")} className=' h-20 lg:h-40 w-20 lg:w-40 skew-y-2 border-[5px]   shadow-xl shadow-black hover:skew-y-[-10px] border-black rounded-sm  brightness-75 contrast-200'/>
          <img src={require("../photos/custom.jpg")} className=' h-20 lg:h-40 w-20 lg:w-40 skew-y-2 border-[5px]  shadow-lg shadow-black hover:skew-y-[-10px] border-black rounded-sm  mt-5 brightness-75 contrast-200'/>
          </div>

          <div className="flex items-center justify-center py-12 lg:py-16">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={`border-[5px] lg:p-4 p-2 rounded-xl duration-700 outline-none focus:ring
         focus:border-blue-300 border-yellow-200 text-black w-80 hover:w-96 lg:w-[35%] lg:hover:w-[50%] transition-all  
          placeholder:text-[#12082256] placeholder:font-semibold  hover:bg-slate-200 font-extrabold ${
            isGrammaticallyCorrect ? 'focus:border-green-500' : 'focus:border-red-500'
          }`}
        placeholder={placeholder}
      />
    </div>
    <div className='text-left pl-[11%] py-4  bg-[#808080]'>
      <h1 className='text-lg lg:text-xl font-alfa'>ADD CUSTOM FIELDS</h1>
    </div>
    <div className='flex-col-reverse flex lg:flex-row bg-[#808080] py-4 '>
      <div>
      <div className=' grid grid-flow-row grid-cols-1 sm:grid-cols-2 text-center lg:text-start lg:px-32 py-10 gap-6'>
      {inputFields.map((value, index) => (
        <div key={index} className="mt-4 ">
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="border-[3px] .border-[#462902dd] text-sm hover:bg-slate-200
            font-extrabold rounded-xl  p-3 text-black placeholder:font-semibold
            placeholder:text-slate-400  outline-none border-blue-400/  border-[#383838] transition-all"
            placeholder='Enter the field'
            />
        </div>
      ))}
      </div>
      <div className='text-center py-6'>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 "
        onClick={addInputField}
        >
        Add  Field +
      </button>
      </div>
      </div>

        <div className='mb-8 mx-auto lg:mx-0  pt-2 rounded-lg bg-white shadow-xl
         shadow-black h-80 w-80'>
          <div className='flex space-x-4 pl-4'>
          <div className=' h-4 w-4 rounded-full bg-red-500'></div>
          <div className=' h-4 w-4 rounded-full bg-yellow-500'></div>
          <div className=' h-4 w-4 rounded-full bg-green-500'></div>
          </div>
          <div>
          <img src={require("../photos/Screenshot (65).png")} 
          className='h-80 w-80 border-2 rounded-b-lg
            brightness-200 contrast-200 border-white'/>
          </div>
        </div>
    </div>

    {/* Submit button */}
    <div className='text-center py-10  bg-[#808080]'>
      <div className='py-7'>
        <h1 className='text-lg font-alfa'>NUMBER OF FIELDS :</h1>
      </div>
      <div className="w-full max-w-lg mx-auto py-8">
      <div className="relative w-full h-6 bg-green-300 rounded-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 h-6 bg-green-500 rounded-full"
          style={{ width: `${(value / 30) * 100}%` }}
        ></div>
        <input
          type="range"
          min="0"
          max={loggedIn ? "30" : "0"}
          step="5"
          value={value}
          onChange={handleSliderChange}
          className="absolute w-full h-full cursor-pointer opacity-0"
        />
      </div>
      <p className="text-center mt-4">Value: {value}</p>
 
    </div>
      <button className=' bg-green-600 md:p-4 p-3 text-center font-alfa text-2xl border-[2px]
       hover:text-yellow-400 border-black hover:bg-green-700 hover:border-yellow-800
        text-yellow-300 rounded-lg w-80 md:w-96'
        onClick={()=>{
          if(value<5){
            alert("Please add number of fields more than 5 atleast")
          }
          else{
            localStorage.setItem('api-form',true);
            getApi(inputValue,inputFields,value);
            
            setTimeout(() => {
              
              navigate('/apipage')
            }, 1000)

          }
          
        }}>
        GET YOUR API
      </button>
    </div>
        <Footer/>
        </div>
       
      </div>
      {showAlert && (
        <Alert
          message={message}
          title={title}
         
          onClose={() =>{
            setShowAlert(false)
            navigate('/login')
          }
          }
        />
      )}

    </>
  )
}
