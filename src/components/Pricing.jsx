import React from "react";

const Pricing = () => {
  return (
    <div className="mt-20 flex flex-col min-h-[700px] ">
      <h1 className="text-center text-6xl bg-gradient-to-b bg-clip-text font-semibold tracking-tight text-transparent dark:from-red-500 dark:to-red-900">
        Pricing
      </h1>
      <div className="mt-10 flex flex-row gap-10 min-h-[500px]">
      <div className="pt-10 w-1/3 flex items-center flex-col border-2 border-gray-700 rounded-[20px] bg-[#1E1E1E] text-white transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.6)]">
          <h1 className="text-2xl font-semibold opacity-50 ">PrimePass</h1>  <br />
          <p><span className="text-6xl font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">₹500</span><span className="text-gray-400">/month</span></p>
          <ul className="text-xl mt-10 space-y-7 opacity-80 ]]">
            <li>✅ 4 Sessions Per Month</li>
            <li>✅ Access to Any One Sport</li>
            <li>✅ Book Slots Anytime</li>
            <li>✅ Perfect for Beginners</li>
          </ul>
          <a href="#" className="mt-6 w-60 py-2 px-3 text-center border-2 border-gray-700 rounded-[15px] opacity-890">Subscribe</a>
        </div>
        <div className="pt-10 w-1/3 flex items-center flex-col border-2 border-gray-700 rounded-[20px] bg-[#1E1E1E] text-white transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.6)]">


          <h1 className="text-2xl font-semibold opacity-50">TwinPass</h1> <br />
          <p><span className="text-6xl font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">₹800</span><span className="text-gray-400">/month</span></p>

          <ul className="text-xl mt-10 space-y-7 opacity-80">
            <li>✅ 8 Sessions Per Month</li>
            <li>✅ Access to Any Two Sport</li>
            <li>✅ Flexible Timings</li>
            <li>✅ Ideal for Regular Players</li>
          </ul>
          <a href="#" className="mt-6 w-60 py-2 px-3 text-center border-2 border-gray-700 rounded-[15px] opacity-90">Subscribe</a>
        </div>
        <div className="pt-10 w-1/3 flex items-center flex-col border-2 border-gray-700 rounded-[20px] bg-[#1E1E1E] text-white transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.6)]">
          <h1 className="text-2xl font-semibold opacity-50"> UltraPass</h1> <br />
          <p><span className="text-6xl font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">₹1,300</span><span className="text-gray-400">/month</span></p>
          <ul className="text-xl mt-10 space-y-7 opacity-80">
            <li>✅ 12 Sessions Per Month</li>
            <li>✅ Access to Any Three Sport</li>
            <li>✅ Priority Booking</li>
            <li>✅ Perfect for All-Rounders</li>
          </ul>
          <a href="#" className="mt-6 w-60 py-2 px-3 text-center border-2 border-gray-700 rounded-[15px] opacity-90">Subscribe</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
