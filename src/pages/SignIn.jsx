import React from 'react'

const SignIn = () => {
  return (

  <div className="mt-22 mx-auto h-109 w-102 min-h-[446px] border border-[#1e1e1e] rounded-[12px]">
  <div className="mt-1 mx-auto h-109 w-100 bg-[#121212] border border-[#1e1e1e] rounded-[12px] text-center">
  <h1 className="mt-7 text-3xl opacity-80 font-semibold">Sign In</h1> <br />
  <p className="opacity-80">Enter your email and password to login</p> <br />
  <input type="text"
   placeholder="Email"
   className="w-80 h-10 border border-2px border-[#1e1e1e] rounded-[9px] p-4 focus:outline-none focus:border-gray-500"/> 
    
  <input type="password" 
  placeholder="Password" 
  className="mt-5 w-80 h-10 border border-2px border-[#1e1e1e] rounded-[9px] p-4 focus:outline-none focus:border-gray-500"/> <br />
    
  <button className="mt-5 border border-2px border-[#1e1e1e] rounded-[9px] w-80 h-10 opacity-80 bg-blue-600 hover:bg-blue-700 font-semibold"> Sign In </button>
    
  <button className="mt-3 border border-2px border-[#1e1e1e] rounded-[9px] w-80 h-10 opacity-80 font-semibold flex items-center justify-center ml-9.5 gap-1"><img src="src/assets/googleicon.svg" alt="" width="23" />Sign In with Google </button>

  <p className="mt-6 text-xs opacity-80">Don't have an account? 
  <a href="/createaccount">
  <span className="text-blue-500">Sign Up</span> </a>it's free!</p>
  </div>


 </div>
  )
}

export default SignIn