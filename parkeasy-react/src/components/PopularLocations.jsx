import { Link } from "react-router-dom";

function PopularLocations() {
  const locations = [
    {
      name: "City Mall Parking",
      slots: "150 Available Slots",
      image: "/park3.jpg",
    },
    {
      name: "Airport Parking",
      slots: "300 Available Slots",
      image: "/airport.jpg",
    },
    {
      name: "Metro Station Parking",
      slots: "90 Available Slots",
      image: "/metro.jpg",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Popular Parking
            <span className="text-cyan-400"> Locations</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {locations.map((location, index) => (
            <div
              key={index}
              className="glass rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {location.name}
                </h3>

                <p className="text-gray-400 mt-3">
                  {location.slots}
                </p>

                <Link
                  to="/find-parking"
                  className="block text-center mt-5 bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition"
                >
                  Reserve Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularLocations;