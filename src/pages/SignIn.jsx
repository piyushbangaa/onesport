import React from 'react'

const SignIn = () => {
  return (
    <div className="items-center justify-center">
    <div className="mt-22 mx-auto h-109 w-100 bg-[#121212] border border-[#1e1e1e] rounded-lg text-center">

    <h1 className="mt-7 text-3xl opacity-80">Sign In</h1> <br />
    <p className="opacity-80">Enter your email and password to login</p> <br />
    <input type="text" placeholder="    Email" className="w-80 h-10 border border-2px border-gray-500 rounded-[9px] "/> 
    <input type="text" placeholder="    Password" className="mt-5 w-80 h-10 border border-2px border-gray-500 rounded-[9px] "/> <br />

    <button className="mt-5 border border-2px border-gray-500 rounded-[9px] w-80 h-10 opacity-80"> Sign In </button>
    <button className="mt-3 border border-2px border-gray-500 rounded-[9px] w-80 h-10 opacity-80"> Sign In with Google </button>
<p className="mt-6 text-xs opacity-80">Don't have an account? Sign Up it's free!</p>
  </div>
  </div>
  )
}

export default SignIn