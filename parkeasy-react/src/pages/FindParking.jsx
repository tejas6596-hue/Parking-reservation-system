import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

function FindParking() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [parkingType, setParkingType] = useState("");
  const [duration, setDuration] = useState("1 Hour");

  const parkingList = [
    {
      id: 1,
      name: "City Mall Parking",
      slots: 42,
      price: "₹20 / Hour",
      image: "/park1.jpg",
      lat: 12.9716,
      lng: 77.5946,
    },
    {
      id: 2,
      name: "Metro Parking",
      slots: 25,
      price: "₹15 / Hour",
      image: "/metro.jpg",
      lat: 12.9784,
      lng: 77.6408,
    },
    {
      id: 3,
      name: "Airport Parking",
      slots: 60,
      price: "₹30 / Hour",
      image: "/airport.jpg",
      lat: 12.9591,
      lng: 77.6974,
    },
  ];

  useEffect(() => {
    const map = L.map("mapView").setView([12.9716, 77.5946], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    parkingList.forEach((parking) => {
      L.marker([parking.lat, parking.lng])
        .addTo(map)
        .bindPopup(
          `<b>${parking.name}</b><br>${parking.slots} Slots Available`
        );
    });

    return () => {
      map.remove();
    };
  }, []);

  const handleReserve = (parking) => {
    localStorage.setItem(
      "selectedParking",
      JSON.stringify(parking)
    );

    navigate("/reservation");
  };

  return (
   
   <div className="bg-[#06142E] text-white min-h-screen">

    {/* ================= NAVBAR ================= */}

    <nav className="bg-slate-900 border-b border-slate-700 shadow-xl">

      <div className="container mx-auto px-8">

        <div className="flex justify-between items-center h-20">

          <div className="flex items-center space-x-3">

            <div className="w-12 h-12 rounded-xl bg-cyan-400 flex items-center justify-center text-black font-bold text-2xl">
              P
            </div>

            <h1 className="text-3xl font-bold text-cyan-400">
              ParkEasy
            </h1>

          </div>

          <div className="hidden md:flex space-x-8 text-lg">

            <Link
              to="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              to="/find-parking"
              className="text-cyan-400 font-semibold"
            >
              Find Parking
            </Link>

            <Link
              to="/reservation"
              className="hover:text-cyan-400 transition"
            >
              Reservation
            </Link>

            <Link
              to="/pricing"
              className="hover:text-cyan-400 transition"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </Link>

          </div>

          <div className="space-x-4">

            <Link
              to="/login"
              className="px-5 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>

    {/* ================= HERO ================= */}

    <section className="py-20">

      <div className="container mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Find

              <span className="text-cyan-400">
                {" "}Smart Parking{" "}
              </span>

              Near You

            </h1>

            <p className="text-gray-300 mt-8 text-xl">

              Search nearby parking spaces, compare prices,
              reserve instantly and navigate effortlessly.

            </p>

            <div className="flex gap-6 mt-10">

              <a
                href="#search"
                className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition"
              >
                Search Parking
              </a>

              <a
                href="#map"
                className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition"
              >
                View Map
              </a>

            </div>

          </div>

          <div>

            <img
              src="/park3.jpg"
              alt="Parking"
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

        </div>

      </div>

    </section>

    {/* ================= SEARCH ================= */}

    <section
      id="search"
      className="pb-20"
    >

      <div className="container mx-auto px-8">

        <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Search Parking
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-slate-700 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-400 text-white"
            />

            <select
              value={parkingType}
              onChange={(e) => setParkingType(e.target.value)}
              className="bg-slate-700 rounded-xl p-4"
            >

              <option value="">
                Select Parking Type
              </option>

              <option>
                2 Wheels
              </option>

              <option>
                4 Wheels
              </option>

              <option>
                VIP Parking
              </option>

            </select>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-slate-700 rounded-xl p-4"
            >

              <option>1 Hour</option>
              <option>2 Hours</option>
              <option>3 Hours</option>
              <option>Full Day</option>

            </select>

            <button
              className="bg-cyan-400 text-black rounded-xl font-bold hover:bg-cyan-300 transition"
            >
              Search
            </button>

          </div>

        </div>

      </div>

    </section>
          {/* ================= AVAILABLE PARKING ================= */}

          <section className="pb-24">

<div className="container mx-auto px-8">

  <h2 className="text-5xl font-bold text-center mb-16">
    Available Parking
  </h2>

  <div className="grid lg:grid-cols-3 gap-10">

    {parkingList.map((parking) => (

      <div
        key={parking.id}
        className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition"
      >

        <img
          src={parking.image}
          alt={parking.name}
          className="h-56 w-full object-cover"
        />

        <div className="p-8">

          <h3 className="text-3xl font-bold">
            {parking.name}
          </h3>

          <p className="text-gray-400 mt-3">
            {parking.slots} Slots Available
          </p>

          <p className="text-cyan-400 mt-3 text-2xl font-bold">
            {parking.price}
          </p>

          <button
            onClick={() => handleReserve(parking)}
            className="block w-full mt-8 bg-cyan-400 text-black py-4 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Reserve Now
          </button>

        </div>

      </div>

    ))}

  </div>

</div>

</section>

{/* ================= MAP SECTION ================= */}

<section
id="map"
className="pb-24"
>

<div className="container mx-auto px-8">

  <h2 className="text-5xl font-bold text-center mb-12">
    Nearby Parking Locations
  </h2>

  <div
    id="mapView"
    className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700"
    style={{ height: "500px" }}
  />

</div>

</section>

{/* ================= STATISTICS ================= */}

<section className="pb-24">

<div className="container mx-auto px-8">

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-slate-800 rounded-3xl p-8 text-center shadow-xl">
      <h3 className="text-5xl font-bold text-cyan-400">500+</h3>
      <p className="mt-3 text-gray-300">Parking Slots</p>
    </div>

    <div className="bg-slate-800 rounded-3xl p-8 text-center shadow-xl">
      <h3 className="text-5xl font-bold text-cyan-400">1200+</h3>
      <p className="mt-3 text-gray-300">Daily Users</p>
    </div>

    <div className="bg-slate-800 rounded-3xl p-8 text-center shadow-xl">
      <h3 className="text-5xl font-bold text-cyan-400">99%</h3>
      <p className="mt-3 text-gray-300">Satisfaction</p>
    </div>

    <div className="bg-slate-800 rounded-3xl p-8 text-center shadow-xl">
      <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
      <p className="mt-3 text-gray-300">Customer Support</p>
    </div>

  </div>

</div>

</section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="pb-24">

        <div className="container mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">

            Why Choose{" "}
            <span className="text-cyan-400">
              ParkEasy?
            </span>

          </h2>

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

              <div className="text-6xl mb-6">
                🚗
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Instant Booking
              </h3>

              <p className="text-gray-300">
                Reserve your parking space within seconds without waiting.
              </p>

            </div>

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

              <div className="text-6xl mb-6">
                📍
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Live Location
              </h3>

              <p className="text-gray-300">
                Find nearby parking using OpenStreetMap integration.
              </p>

            </div>

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

              <div className="text-6xl mb-6">
                🔒
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Secure Parking
              </h3>

              <p className="text-gray-300">
                Safe and monitored parking areas for your vehicle.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 border-t border-slate-700">

        <div className="container mx-auto px-8 py-12">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h2 className="text-3xl font-bold text-cyan-400">
                ParkEasy
              </h2>

              <p className="text-gray-400 mt-4">
                Smart Parking Slot Reservation System designed for faster,
                safer and convenient parking experiences.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Quick Links
              </h3>

              <div className="space-y-3">

                <Link
                  to="/"
                  className="block hover:text-cyan-400"
                >
                  Home
                </Link>

                <Link
                  to="/reservation"
                  className="block hover:text-cyan-400"
                >
                  Reservation
                </Link>

                <Link
                  to="/pricing"
                  className="block hover:text-cyan-400"
                >
                  Pricing
                </Link>

                <Link
                  to="/contact"
                  className="block hover:text-cyan-400"
                >
                  Contact
                </Link>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Contact
              </h3>

              <p className="text-gray-400">
                📍 Bangalore, India
              </p>

              <p className="text-gray-400 mt-2">
                📧 support@parkeasy.com
              </p>

              <p className="text-gray-400 mt-2">
                📞 +91 9876543210
              </p>

            </div>

          </div>

          <hr className="border-slate-700 my-8" />

          <p className="text-center text-gray-400">
            © 2026 ParkEasy. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default FindParking;