import { Link } from "react-router-dom";

function Navbar() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/icons8-parking-50.png"
              alt="logo"
              className="h-10 w-10"
            />

            <h1 className="text-3xl font-bold text-cyan-400">
              ParkEasy
            </h1>
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-8 text-lg">

  <Link
    to="/"
    className="hover:text-cyan-400 transition"
  >
    Home
  </Link>

  <Link
    to="/find-parking"
    className="hover:text-cyan-400 transition"
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

          {/* Right Side */}
          {username ? (
            <div className="flex items-center gap-4">

              <div className="text-right">
                <p className="font-semibold text-cyan-300">
                  {username}
                </p>

                <p className="text-xs text-gray-400">
                  {email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex gap-3">

              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border border-cyan-500 hover:bg-cyan-500 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
              >
                Register
              </Link>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;