import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* Navbar */}

      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">

        <div className="container mx-auto px-8">

          <div className="flex justify-between items-center h-20">

            <div className="flex items-center gap-3">

              <img
                src="/icons8-parking-50.png"
                alt="Parking Logo"
                className="h-10 w-10"
              />

              <h1 className="text-2xl font-bold text-cyan-400">
                ParkEasy
              </h1>

            </div>

            <div className="hidden md:flex gap-8">

              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>

              <Link to="/find-parking" className="hover:text-cyan-400">
                Find Parking
              </Link>

              <Link to="/reservation" className="hover:text-cyan-400">
                Reservations
              </Link>

              <Link to="/pricing" className="text-cyan-400">
                Pricing
              </Link>

              <Link to="/contact" className="hover:text-cyan-400">
                Contact
              </Link>

            </div>

            <Link
              to="/login"
              className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
            >
              Login
            </Link>

          </div>

        </div>

      </nav>

      {/* Hero */}

      <section className="pt-36 pb-16 text-center">

        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold">

            Simple &

            <span className="text-cyan-400">
              {" "}Transparent Pricing
            </span>

          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Choose the plan that fits your parking needs.
          </p>

        </div>

      </section>

      {/* Pricing Plans */}

      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Basic */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">

              <h2 className="text-3xl font-bold">
                Basic
              </h2>

              <p className="text-gray-400 mt-2">
                Suitable for occasional users.
              </p>

              <h3 className="text-5xl font-bold mt-6">
                ₹20
                <span className="text-lg text-gray-400">
                  /hour
                </span>
              </h3>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li>✔ Standard Parking</li>
                <li>✔ Slot Reservation</li>
                <li>✔ Email Confirmation</li>
                <li>✔ Customer Support</li>
              </ul>

              <button className="w-full mt-10 bg-cyan-500 py-4 rounded-xl hover:bg-cyan-600">
                Choose Plan
              </button>

            </div>

            {/* Premium */}

            <div className="bg-white/10 backdrop-blur-lg border-2 border-cyan-400 rounded-3xl p-8 relative hover:-translate-y-2 transition">

              <span className="absolute top-0 right-0 bg-cyan-500 px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-semibold">
                MOST POPULAR
              </span>

              <h2 className="text-3xl font-bold">
                Premium
              </h2>

              <p className="text-gray-400 mt-2">
                Best for frequent commuters.
              </p>

              <h3 className="text-5xl font-bold mt-6">
                ₹799
                <span className="text-lg text-gray-400">
                  /month
                </span>
              </h3>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li>✔ Unlimited Reservations</li>
                <li>✔ Priority Slots</li>
                <li>✔ Notifications</li>
                <li>✔ Premium Support</li>
                <li>✔ Booking History</li>
              </ul>

              <button className="w-full mt-10 bg-cyan-500 py-4 rounded-xl hover:bg-cyan-600">
                Choose Plan
              </button>

            </div>
                        {/* VIP */}

                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">

<h2 className="text-3xl font-bold">
  VIP
</h2>

<p className="text-gray-400 mt-2">
  Ultimate convenience experience.
</p>

<h3 className="text-5xl font-bold mt-6">
  ₹1499
  <span className="text-lg text-gray-400">
    /month
  </span>
</h3>

<ul className="mt-8 space-y-4 text-gray-300">
  <li>✔ Reserved VIP Slots</li>
  <li>✔ Valet Assistance</li>
  <li>✔ 24×7 Support</li>
  <li>✔ Priority Access</li>
  <li>✔ Detailed Reports</li>
</ul>

<button className="w-full mt-10 bg-cyan-500 py-4 rounded-xl hover:bg-cyan-600">
  Choose Plan
</button>

</div>

</div>

</div>

</section>

{/* Why Choose ParkEasy */}

<section className="pb-20">

<div className="container mx-auto px-6">

<div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10">

<h2 className="text-4xl font-bold text-center mb-10">
Why Choose ParkEasy?
</h2>

<div className="grid md:grid-cols-3 gap-8 text-center">

<div>

  <div className="text-5xl mb-4">
    🚗
  </div>

  <h3 className="text-xl font-semibold">
    Easy Booking
  </h3>

  <p className="text-gray-400 mt-2">
    Reserve parking slots within seconds.
  </p>

</div>

<div>

  <div className="text-5xl mb-4">
    ⏱️
  </div>

  <h3 className="text-xl font-semibold">
    Save Time
  </h3>

  <p className="text-gray-400 mt-2">
    Avoid searching for parking manually.
  </p>

</div>

<div>

  <div className="text-5xl mb-4">
    🔒
  </div>

  <h3 className="text-xl font-semibold">
    Secure Access
  </h3>

  <p className="text-gray-400 mt-2">
    Reliable and secure reservation system.
  </p>

</div>

</div>

</div>

</div>

</section>

{/* Footer */}

<footer className="bg-slate-950 border-t border-slate-800 py-10">

<div className="container mx-auto px-6 text-center">

<h2 className="text-3xl font-bold text-cyan-400">
ParkEasy
</h2>

<p className="text-gray-500 mt-4">
Smart Parking Reservation Platform
</p>

<p className="text-gray-600 mt-6">
© 2026 ParkEasy. All Rights Reserved.
</p>

</div>

</footer>

</div>
);
}

export default Pricing;