import Image from "../assets/wallpaper.jpg"

const Workflow = () => {
  return (
    <div className="mt-15 mb-20 min-h-[800px] flex flex-col items-center justify-center gap-10 px-10">
      <h1 className="text-center text-6xl bg-gradient-to-b bg-clip-text font-semibold tracking-tight text-transparent dark:from-red-500 dark:to-red-900">How OneSport Works?</h1>
      <div className="flex flex-row mt-3 w-full items-center justify-center">
        <div className="w-1/2 grid grid-cols-3 grid-rows-2 gap-6 ">
          {[
            { title: "1. Sign Up / Log In", desc: "Register using email, phone number, or social login." },
            { title: "2. Find a Field", desc: "Explore available sports fields based on location, sport type, and date." },
            { title: "3. Reserve a Field", desc: "Check field details (cost, slots, images, reviews) & book your time." },
            { title: "4. Secure Booking", desc: "Pay securely via UPI or cards. Receive booking confirmation via SMS with a booking ID." },
            { title: "5. Stay Notified", desc: "Get notifications before the booking. Check in at the venue using a QR code or booking ID." },
            { title: "6. Enjoy the Game", desc: "Use the booked field for the reserved time." },
          ].map((step, index) => (
            <div key={index} className="p-4 border-2 border-[#1e1e1e] rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-red-500 opacity-90">{step.title}</h2> <br />
              <p className="text-white opacity-80">{step.desc}</p>
            </div>
          ))}
        </div>
          


        <div className="w-1/2 flex justify-center mt-5">
          <img
            src={Image} 
            alt="OneSport Workflow"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
