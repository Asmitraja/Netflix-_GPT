import React, { useState } from 'react'
import Header from './Header';


const Login = () => {

  const[signInForm , setSignInForm] = useState(true);
  const handleSignIn = ()=>{
      setSignInForm(!signInForm);
  }
  return (
    <div>
    <Header/>
   
        <div className='absolute w-[100%] my-36  '>
        <form className='flex flex-col w-3/12 mx-auto bg-black bg-opacity-70 rounded-md text-white'>
          <h1 className='text-3xl  m-3 mx-8'>{!signInForm ?'Sign Up' :'Sign In'}</h1>
         {!signInForm && ( <input className='p-3 m-2 mx-8 rounded-md bg-gray-700' type='text' placeholder='Full Name '/> ) }
          <input className='p-3 m-2 mx-8 rounded-md bg-gray-700' type='text' placeholder='Email or phone number'/>
          <input className='p-3 m-2 mx-8 rounded-md bg-gray-700' type='password' placeholder='Password'/>
          <button className='p-2 m-6 mx-8 rounded-md bg-red-700'>{!signInForm ?'Sign Up' :'Sign In'}</button>
          <p className='p-2 m-2 mx-8 text-gray-400 ' onClick={handleSignIn}>{signInForm ? <h1>New to Netflix? <span className='cursor-pointer text-white'>Sign up now.</span></h1> :<h1>Already registered? <span className='cursor-pointer text-white'>Sign In now.</span></h1>}</p>
        </form>
        </div>
        <div className=''>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background img" /> 
         
        </div>
        
    </div>
  )
}

export default Login;
