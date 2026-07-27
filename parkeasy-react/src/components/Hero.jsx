import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <span className="text-cyan-400 uppercase tracking-widest">
            Smart Parking Solution
          </span>

          <h1 className="text-6xl font-bold mt-5 leading-tight">
            Reserve Parking Slots
            <span className="text-cyan-400"> In Seconds</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            ParkEasy helps drivers locate, reserve and manage parking spaces
            in real-time with a secure booking platform.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/find-parking"
              className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition glow"
            >
              Book Slot
            </Link>

            <Link
              to="/pricing"
              className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 transition"
            >
              Explore Plans
            </Link>

          </div>

        </div>

        <div>

          <img
            src="/park1.jpg"
            alt="Parking"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;