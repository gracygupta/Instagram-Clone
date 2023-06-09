import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';

export default function Login(){
    const navigate = useNavigate();
    const { firebase }= useContext(FirebaseContext); 

    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');

    const [error,setError] = useState('');
    const isInvalid = password ==='' || emailAddress === '';

    const handleLogin = async(event)=>{
        
        event.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(emailAddress,password);
            navigate(ROUTES.DASHBOARD);
        }catch(error){
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(()=>{
        document.title = 'Login-Instagram';
    },[])


    return(
    <div className = "container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5 h-50">
            <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
        </div>
        <div className = "flex flex-col w-2/5">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-center w-full">
            <img src ="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4"/>
    
            </h1>
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <form onSubmit={handleLogin
            } method="POST">
                <input area-lable="Enter your email address" type="text" placeholder="Email address" value={emailAddress} className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target})=>{ setEmailAddress(target.value)}}/>
                <input area-lable="Enter your password" type="password" placeholder="Password" value={password} className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target})=>{ setPassword(target.value)}}/>
                <button disabled={isInvalid} type="submit" className={`bg-blue-medium text-white rounded w-full h-8 font-bold ${isInvalid && 'opacity-50'}`}>Login</button>
            </form>
        </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
                <p className="text-sm">Don&apos;t have an account?{` `}
                <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">Sign Up</Link>
                </p>
            </div>
        </div>
    </div>
    )
}


//text-red-primary -> hex values
// text-gray-base -> hex values
//border-gray-primary -> hex values
//bg-blue-medium -> hex values
