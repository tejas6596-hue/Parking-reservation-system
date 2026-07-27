import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">

      <div className="container mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-3xl font-bold text-cyan-400">
              ParkEasy
            </h3>

            <p className="mt-4 text-gray-400">
              Smart Parking Reservation Platform for modern cities.
            </p>

          </div>

          <div>

            <h4 className="text-xl font-bold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/find-parking">Find Parking</Link>
              </li>

              <li>
                <Link to="/reservation">Reservation</Link>
              </li>

            </ul>

          </div>

          <div>

            <h4 className="text-xl font-bold mb-4">
              Contact
            </h4>

            <p className="text-gray-400">
              Bangalore, Karnataka
            </p>

            <p className="text-gray-400 mt-2">
              support@parkeasy.com
            </p>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

          © 2026 ParkEasy. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;