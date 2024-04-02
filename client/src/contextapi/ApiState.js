// import { NavLink, json, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Apicon from './Apicontext';
export default function ApiState(props) {
    // const navigate = useNavigate();
    var resultarray = []
    const [apidata, setapidata] = useState({ "apiname": "", "number": "", "fields": [], "dataArray": [] });
    const [url, seturl] = useState("")
    const [Api, setApi] = useState([]);

    // To get the api:
    const getApi = async (apiname, inputFields, number) => {
        const fields = await inputFields ? (inputFields.filter(entry => entry.trim() !== '')) : inputFields;
        const response = await fetch("https://apiapp-backend.vercel.app/api/api/getapi", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "apiname": apiname, "fields": fields, "number": parseInt(number) })
        });
        resultarray = await response.json()
        // await console.log("response here is:", json)
        setApi((prevText) => {
            const newText = resultarray;
            return newText;
        });
        await setapidata({ "apiname": apiname, "fields": inputFields, "dataArray": resultarray })

        await console.log(" Api is:", Api)
        // await alert("Edro done ha")
    }
    useEffect(() => {
        setApi(resultarray)
    }, [])

    //set api data like name and fields:
    const apiData = async (name, fields, number) => {
        setapidata({ "apiname": name, "fields": fields, "number": number });

    }

    // Get the link of the  api :
    const getapiLink = async () => {
        // await console.log(apidata.apiname, apidata.fields, apidata.dataArray);
        const response = await fetch("https://api.jsonbin.io/v3/b", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2a$10$eYISQ4aSjbX8R3jCBW3caemV8UmRv1AXMp.urJc7LELgsJAwvLywW",
                "X-Bin-Name": apidata.apiname,
                "X-Bin-Private": false
            },
            body: JSON.stringify({ "dataArray": apidata.dataArray })
        });
        const js = await response.json();
        const binId = await js.metadata.id;
        seturl((last) => {
            const newText = ` https://api.jsonbin.io/b/${binId}/latest`;
            return newText;
        });
        // console.log("response here is:", js)
    }

    const putLink = async (url) => {
        // await console.log(apidata.apiname, apidata.fields, apidata.dataArray);
        const response = await fetch("https://apiapp-backend.vercel.app/api/api/putlink", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "apiname": apidata.apiname, "fields": apidata.fields,
                "number": apidata.number, "url": url
            })
        });
        const js = await response.json();
        // if (js.success) {
        //     console.log("Success")
        // }
        // if (!js.success) {
        //     console.log("FAILed")
        // }
    }







    //For creating a new user:
    const createuser = async (formData) => {
        const response = await fetch("https://apiapp-backend.vercel.app/api/auth/createuser", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "name": formData.username, "email": formData.email, "password": formData.password })
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            // navigate('/');
            localStorage.setItem('auth-token', json.authtoken);
            // alert("Account created successfully....", "success")
            return true;

        }
        else {
            // alert("Email already Registered!Please input another email....", "danger");
            return false;
        }
    }

    // For the login 

    //For creating a new user:
    const login = async (formData) => {
        const response = await fetch("https://apiapp-backend.vercel.app/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email": formData.email, "password": formData.password })
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            // navigate('/');
            localStorage.setItem('auth-token', json.authtoken);
            // alert("LoggedIn successfully....", "success")
            return true;

        }
        else {
            // alert("Wrong Credentials,try again .....", "danger");
            return false;
        }
    }

    const dashboard = async (requiredfor, profession, profilepic) => {
        // await console.log(requiredfor, profession)
        const response = await fetch("https://apiapp-backend.vercel.app/api/auth/profile", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ "requiredfor": requiredfor, "profession": profession, "profilepic": profilepic })
        });
        const json = await response.json();
        if (!json.success) {
            alert("Failure has occured bro")

        }
    }

    return (
        <>
            <Apicon.Provider value={{ getApi, Api, dashboard, apiData, getapiLink, putLink, apidata, url, login, createuser }}>
                {props.children}
            </Apicon.Provider>
        </>
    )
}

// const getapiLink = async () => {
//     const fields = await apidata.fields.filter(entry => entry.trim() !== '');
//     await console.log(apidata.apiname, fields, apidata.dataArray);
//     const response = await fetch("http://localhost:5000/api/api/getapilink", {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ "apiname": apidata.apiname, "fields": fields, "dataArray": apidata.dataArray })
//     });
//     const js = await response.json();
//     await seturl(js.url);
//     await seturl(() => {
//         const newText = js.url;
//         return newText;
//     });
//     await console.log("response here is:", js)
// }
