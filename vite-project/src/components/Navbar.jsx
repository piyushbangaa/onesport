const Workflow = () => {
    return (
      <div className="mt-20 min-h-[800px] flex flex-col items-center justify-center gap-10 px-10">
        <h1 className="text-center text-6xl bg-gradient-to-b bg-clip-text font-semibold tracking-tight text-transparent dark:from-red-500 dark:to-red-900">How OneSport Works?</h1>
        <div className="flex flex-row mt-8 w-full">
          <div className="w-1/2 grid grid-cols-3 grid-rows-2 gap-6">
            {[
              { title: "1. Sign Up / Log In", desc: "Register using email, phone number, or social login." },
              { title: "2. Browse & Search Fields", desc: "Explore available sports fields based on location, sport type, and date." },
              { title: "3. Select & Book a Field", desc: "View field details (pricing, availability, images, and reviews). Pick a time slot and proceed with booking." },
              { title: "4. Payment & Confirmation", desc: "Pay securely via UPI, cards, or wallets. Receive booking confirmation via SMS with a booking ID." },
              { title: "5. Reminders & Check-in", desc: "Get notifications before the booking. Check in at the venue using a QR code or booking ID." },
              { title: "6. Enjoy the Game", desc: "Use the booked field for the reserved time." },
            ].map((step, index) => (
              <div key={index} className="p-4 bg-red-900 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-red-500 opacity-90">{step.title}</h2>
                <p className="text-white opacity-80">{step.desc}</p>
              </div>
            ))}
          </div>
  
          <div className="w-1/2 flex justify-center mt-10">
            <img
              src="/wallpaperflare.com_wallpaper.jpg" 
              alt="OneSport Workflow"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Workflow;
