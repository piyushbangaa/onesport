import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-row min-h-[200px]">
    <div className="mt-34 ml-10 w-1/4 flex flex-col text-left"> © OneSport 2025</div>
    <div className="w-1/4 flex flex-col"></div>
    <div className="mt-11 w-1/4 flex flex-col text-left">
         <ul>
          <li><a href="" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-14">Pricing</a></li> <br />
          <li><a href="" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-17">Contact</a></li> <br />
          <li><a href="" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-19">About Us</a></li>
         </ul>
        </div>
    <div className="mt-11 w-1/4 flex flex-col text-left">
    <ul>
        <li><a href="" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-27">Privacy Policy</a></li> <br />
        <li><a href="" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-27" >Refund Policy</a> </li> <br />
        <li>Designed by <a href="https://www.linkedin.com/in/piyushbanga/" className="relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-40"><span className="text-red-500"> Piyush</span></a></li>
    </ul>
    </div>
    </footer>
  )
}

export default Footer