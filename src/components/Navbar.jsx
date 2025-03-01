import logo from "../assets/logo.png";

const Navbar = () => {
    return(
     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                   <a href="/"> <img className="h-10"src={logo} alt="logo" /></a>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 opacity-80">
                 <li>Platform</li>
                 <li>Solutions</li>
                 <li>Customers</li>
                 <li>Careers</li>
                 </ul>
                 <div className="hidden lg:flex justify-center space-x-2 items-center">
                <a href="/signin" className="py-2 px-3 border rounded-md">
                    Sign In
                </a>
                <a href="/createaccount" className="bg bg-gradient-to-r from bg-red-500 to bg-red-800 py-2 px-3 border rounded-md">Create Account</a>
                 </div>
            </div>
        </div>
     </nav>
    );
};

export default Navbar;