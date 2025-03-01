import React from 'react'

const createaccount = () => {
  return (
    <div className="h-132.5 w-102 mx-auto mt-14  border border-[#1e1e1e] text-center rounded-[12px]">

    <div className="h-130 w-100 mx-auto mt-1   bg-[#121212] border border-[#1e1e1e] text-center rounded-[12px]">
    <h1 className="mt-7 font-semibold text-3xl opacity-80"> Create an Account</h1> 
    <h1 className="mt-3 opacity-80">Enter your full name, email, and create a password to sign up.</h1>
    <input type="text"
     placeholder="Name" 
     className="border border-2px border-[#1e1e1e] rounded-[9px] mt-5 w-87 h-10 p-4 focus:outline-none focus:border-gray-500" />

    <input type="text"
     placeholder="Email" 
     className="border border-2px border-[#1e1e1e] rounded-[9px] mt-5 w-87 h-10 p-4 focus:outline-none focus:border-gray-500" />

    <input type="Password"
     placeholder="Password" 
     className="border border-2px border-[#1e1e1e] rounded-[9px] mt-5 w-87 h-10 p-4 focus:outline-none focus:border-gray-500" />

    <button className="mt-5 border border-2px border-[#1e1e1e] rounded-[9px] w-87 h-10 opacity-80 bg-blue-600 hover:bg-blue-700 font-semibold"> Sign Up </button> 

     <p className="mt-3">OR</p>

    <button className="mt-3 border border-2px border-[#1e1e1e] rounded-[9px] w-87 h-10 opacity-80 font-semibold flex items-center justify-center ml-6 gap-1"> <img src="src/assets/googleicon.svg" alt="" width="23"/>Continue with Google </button>  

    <p className="mt-3 text-xs opacity-80">Already have an account? <a href="/signin"><span className="text-blue-500">Sign Up</span> </a></p>
              
              
       
    </div>
    </div>
  )
}


export default createaccount
