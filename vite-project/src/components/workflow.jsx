const Workflow = () => {
    return (

      <div className="mt-30 min-h-[800px] flex-col items-center justify-center gap-10 px-10">
        <h1 className="text-center text-5xl text-red-500">How OneSport Works?</h1>
        <div className="flex flex-row mt-15">
        <div className="w-1/2">
          <div className="mt-10">
            {[
              { title: "1. Sign Up / Log In", desc: "Register using email, phone number, or social login." },
              { title: "2. Browse & Search Fields", desc: "Explore available sports fields based on location, sport type, and date." },
              { title: "3. Select & Book a Field", desc: "View field details (pricing, availability, images, and reviews). Pick a time slot and proceed with booking." },
              { title: "4. Payment & Confirmation", desc: "Pay securely via UPI, cards, or wallets. Receive booking confirmation via SMS with a booking ID." },
              { title: "5. Reminders & Check-in", desc: "Get notifications before the booking. Check in at the venue using a QR code or booking ID." },
              { title: "6. Enjoy the Game", desc: "Use the booked field for the reserved time." },
            ].map((step, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-semibold text-red-600">{step.title}</h2>
                <p className="text-white">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="w-1/2 flex justify-center">
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
  