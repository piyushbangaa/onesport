import React from "react";

const Pricing = () => {
  return (
    <div className="mt-20 flex flex-col min-h-[700px]">
      <h1 className="text-center text-5xl text-red-500 font-semibold">
        Pricing
      </h1>
      <div className="mt-10 flex flex-row gap-10 min-h-[500px] ">
        <div className="pt-10 w-1/3 flex items-center flex-col border-2 border-gray-700 rounded-[20px]">
          <h1 className="text-5xl font-semibold ">PrimePass</h1>  <br />
          <p><span className="text-4xl font-semibold">₹500</span> /month</p>
          <ul className="text-xl mt-10 space-y-7">
            <li>✅ 4 Sessions Per Month</li>
            <li>✅ Access to Any One Sport</li>
            <li>✅ Book Slots Anytime</li>
            <li>✅ Perfect for Beginners</li>
          </ul>
          <a href="#" className="mt-6 w-60 py-2 px-3 text-center border-2 border-gray-700 rounded-[15px]">Subscribe</a>
        </div>
        <div className="pt-10 w-1/3 flex flex-col items-center border-2 border-gray-700 rounded-[20px]">
          <h1 className="text-5xl font-semibold">TwinPass</h1> <br />
          <p> <span className="text-4xl font-semibold">₹800</span> /month</p>
          <ul className="text-xl mt-10 space-y-7">
            <li>✅ 8 Sessions Per Month</li>
            <li>✅ Access to Any Two Sport</li>
            <li>✅ Flexible Timings</li>
            <li>✅ Ideal for Regular Players</li>
          </ul>
          <a href="#" className="mt-6 w-60 py-2 px-3 text-center border-2 border-gray-700 rounded-[15px]">Subscribe</a>
        </div>
        <div className="pt-10 w-1/3 flex flex-col items-center border-2 border-gray-700 rounded-[20px]">
          <h1 className="text-5xl font-semibold"> UltraPass</h1> <br />
          <p><span className="text-4xl font-semibold">₹1,300</span> /month</p>
          <ul className="text-xl mt-10 space-y-7">
            <li>✅ 12 Sessions Per Month</li>
            <li>✅ Access to Any Three Sport</li>
            <li>✅ Priority Booking</li>
            <li>✅ Perfect for All-Rounders</li>
          </ul>
          <a href="#" className="mt-6 w-60 py-2 px-3 text-center border-2 border-gray-700 rounded-[15px]">Subscribe</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
