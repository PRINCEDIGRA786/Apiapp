import React, { useContext, useEffect } from 'react'
import { IoCopy } from 'react-icons/io5';
import { LuCopyCheck } from 'react-icons/lu';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import Apicon from '../contextapi/Apicontext';
import { useNavigate } from 'react-router-dom';
export default function Linkpage() {
  const navigate=useNavigate();
    const[active,setactive]=useState("js");
    const[codetype,setcodetype]=useState("js");
    const[copy,setcopy]=useState(false);
    const [Url,setUrl]=useState("");
    const[urlcopy,seturlcopy] =useState(false);
    const context=useContext(Apicon);
    const{apidata,getapiLink,putLink,url}=context;
    const [textToCopy, setTextToCopy] = useState("");
    const jscode=`async function fetchDataFromJSONBin(binUrl) {
        const ApiKey='$2a$10$h6/xlTVO2idorTA7wyWtTe9zATqYbjzsC/1ciowREUko2.lTUgdf.'
        const url = <URL>;
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "X-Master-Key": ApiKey,
                },
            });

            if (!response.ok) {
                throw new Error(\`HTTP error! Status: \${response.status}\`);
            }

            const data = await response.json();
            console.log(data.record.dataArray);
        } catch (error) {
            console.error("Error:", error);
        }
    }`;

    const pycode=`import requests

    async def fetch_data_from_jsonbin(bin_url):
        api_key = '$2a$10$h6/xlTVO2idorTA7wyWtTe9zATqYbjzsC/1ciowREUko2.lTUgdf.'
        url = bin_url
        try:
            response = requests.get(url, headers={"X-Master-Key": api_key})
    
            if not response.ok:
                raise Exception(f"HTTP error! Status: {response.status_code}")
    
            data = response.json()
            print(data['record']['dataArray'])
    
        except Exception as e:
            print("Error:", e)
    `;

    const rubycode=`require 'uri'
    require 'net/http'
    require 'json'
    
    def fetch_data_from_jsonbin(bin_url)
        api_key = '$2a$10$h6/xlTVO2idorTA7wyWtTe9zATqYbjzsC/1ciowREUko2.lTUgdf.'
        url = URI(bin_url)
        begin
            http = Net::HTTP.new(url.host, url.port)
            http.use_ssl = true
            request = Net::HTTP::Get.new(url)
            request["X-Master-Key"] = api_key
            response = http.request(request)
    
            unless response.is_a?(Net::HTTPSuccess)
                raise "HTTP error! Status: #{response.code}"
            end
    
            data = JSON.parse(response.body)
            puts data['record']['dataArray']
    
        rescue StandardError => e
            puts "Error: #{e.message}"
        end
    end
    `

  const handleCopyClick = async() => {
    navigator.clipboard.writeText(textToCopy);
    setcopy(true);
    setTimeout(() => {
        setcopy(false);
    }, 2500);
  };

  useEffect(()=>{
    if(!localStorage.getItem('auth-token') ){
      alert("Loged in required!! Please login first");
      navigate('/login')
    }
    else{
      if( !localStorage.getItem('api-form')){
        alert("Please first fill info what to customizer");
        navigate('/apiform');

      }
    }
    setTextToCopy(jscode);
  },[])

  const handleCopyUrl=()=>{
    navigator.clipboard.writeText(url);
    seturlcopy(true)
    setTimeout(() => {
        seturlcopy(false);
    }, 2500);
  }

  useEffect(()=>{
    if(codetype=="js"){
      setTextToCopy(jscode);
    }
   
      if(codetype=="py"){
        setTextToCopy(pycode);
      }
      if(codetype=="rb"){
        setTextToCopy(rubycode);
      }
   
  },[codetype])

  useEffect(()=>{
    if(!url){
      getapiLink();
    }
    else{
      setUrl(url)
      putLink(url);
    }
  },[url])
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
            <div className='text-center pt-8'>
                <h1 className='text-2xl text-yellow-400 font-alfa'>{apidata.apiname} API</h1>
            </div>
            <div className="bg-[#1f1b1bcf] rounded-xl p-4 my-12 mx-6 lg:mx-20 text-white pb-8">
            <div className='flex lg:space-x-4 space-x-2 pl-5 lg:pl-10 py-3'>
          <div className=' h-4 w-4 rounded-full bg-red-500'></div>
          <div className=' h-4 w-4 rounded-full bg-yellow-500'></div>
          <div className=' h-4 w-4 rounded-full bg-green-500'></div>
          </div>
          <div>
            <ul className='text-white text-md font-extrabold flex space-x-6 pl-14 pb-3'>
              <li className={`${
                        active === 'js' ? ' underline underline-offset-4' : ' no-underline'
                    } cursor-pointer decoration-slate-300  decoration-4 `}
                    onClick={() => {
                      setactive('js');
                      setcodetype("js")
                      }}>JAVASCRIPT</li>
              <li className={`${
                        active === 'py' ? ' underline underline-offset-4' : ' no-underline'
                    } cursor-pointer decoration-slate-300  decoration-4 `}
                    onClick={() => {
                      setactive('py');
                      setcodetype("py")
                      }}>PYTHON</li>
              <li className={`${
                        active === 'rb' ? ' underline underline-offset-4' : ' no-underline'
                    } cursor-pointer decoration-slate-300  decoration-4 `}
                    onClick={() => {
                      setactive('rb');
                      setcodetype("rb")
                      }}>RUBY</li>
            </ul>
          </div>
      <div className="relative group">
        {/* Main text */}
        <div className=" text-white p-2 h-96 lg:h-[60vh] mx-3 lg:mx-10 border px-1
         lg:px-4 py-4 border-gray-300 
        overflow-y-scroll rounded-lg overflow-hidden bg-[#191818] text-sm font-extrabold">
        <pre style={{ whiteSpace: 'pre-wrap' }}>{textToCopy}</pre>

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

        <div className='text-center py-7'>
            <h1 className='text-xl text-white font-alfa'>URL</h1>
        </div>
        <div className=' text-center mb-10 pt-0 flex border-2 w-80 lg:w-[55%] p-3 rounded-xl
            mx-auto border-black justify-between
             bg-[#808080,] bg-slate-100'>
            <h1 className='  text-black font-extrabold text-start
             text-sm pt-5 pl-16 ' >{(Url)?(Url):<img src={require("../photos/dots.gif")} className='h-14
              bg-black w-20'/>}
          </h1>
          <div className=' text-end pt-2 '>

              {  !urlcopy && <IoCopy
          className=" h-10 w-10  p-2 text-[#383838] cursor-pointer opacity- group-hover:opacity-100"
          onClick={handleCopyUrl}
          >
          
        </IoCopy>
}
        { urlcopy && <LuCopyCheck className=" h-10 w-10  p-2 text-[#383838] cursor-pointer opacity- group-hover:opacity-100"
          />}
          </div>
        </div>
        <Footer/>
        </div>
      </div>
    </>
  )
}
