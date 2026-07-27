function Features() {
    return (
      <section className="py-24">
        <div className="container mx-auto px-8">
  
          <div className="text-center mb-16">
  
            <h2 className="text-5xl font-bold">
              Why Choose
              <span className="text-cyan-400"> ParkEasy?</span>
            </h2>
  
            <p className="text-gray-400 mt-4">
              Smart technology for a seamless parking experience.
            </p>
  
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            <div className="glass p-8 rounded-3xl hover:scale-105 transition">
  
              <div className="text-5xl mb-5">🚗</div>
  
              <h3 className="text-2xl font-bold mb-4">
                Real-Time Availability
              </h3>
  
              <p className="text-gray-300">
                Instantly view available parking spaces across multiple locations.
              </p>
  
            </div>
  
            <div className="glass p-8 rounded-3xl hover:scale-105 transition">
  
              <div className="text-5xl mb-5">⚡</div>
  
              <h3 className="text-2xl font-bold mb-4">
                Instant Reservation
              </h3>
  
              <p className="text-gray-300">
                Reserve parking slots in seconds with a secure booking system.
              </p>
  
            </div>
  
            <div className="glass p-8 rounded-3xl hover:scale-105 transition">
  
              <div className="text-5xl mb-5">🔒</div>
  
              <h3 className="text-2xl font-bold mb-4">
                Secure Payments
              </h3>
  
              <p className="text-gray-300">
                Protected transactions and reservation management.
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Features;