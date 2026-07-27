import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Reservation() {
  const parking = JSON.parse(
    localStorage.getItem("selectedParking")
  );

  const userId = localStorage.getItem("user_id");

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("Car");
  const [bookingDate, setBookingDate] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [exitTime, setExitTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [amount, setAmount] = useState(0);
  const [reservations, setReservations] = useState([]);

  const parkingRates = {
    "City Mall Parking": 20,
    "Airport Parking": 30,
    "Metro Parking": 15,
    "Metro Station Parking": 15,
  };

  useEffect(() => {
    calculateAmount();
  }, [entryTime, exitTime]);

  const calculateAmount = () => {
    if (!entryTime || !exitTime) {
      setAmount(0);
      return;
    }

    const start = new Date(`2000-01-01 ${entryTime}`);
    const end = new Date(`2000-01-01 ${exitTime}`);

    const hours = (end - start) / (1000 * 60 * 60);

    if (hours <= 0) {
      setAmount(0);
      return;
    }

    const rate =
      parkingRates[parking?.name] || 20;

    setAmount(hours * rate);
  };

  const loadReservations = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/my-reservations/${userId}`
      );

      const data = await response.json();

      if (data.success) {
        setReservations(data.reservations);
      } else {
        setReservations([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadReservations();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white">

    {/* ================= NAVBAR ================= */}

    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900">

      <div className="container mx-auto px-8">

        <div className="flex justify-between items-center h-20">

          <Link
            to="/"
            className="text-3xl font-bold text-cyan-400"
          >
            ParkEasy
          </Link>

          <div className="space-x-8">

            <Link
              to="/"
              className="hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/find-parking"
              className="hover:text-cyan-400"
            >
              Find Parking
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </nav>

    {/* ================= HEADER ================= */}

    <section className="pt-36 pb-12">

      <div className="container mx-auto px-8 text-center">

        <h1 className="text-5xl font-bold">

          Reserve Your

          <span className="text-cyan-400">
            {" "}Parking Slot
          </span>

        </h1>

        <p className="mt-4 text-gray-400">
          Complete your booking details below.
        </p>

      </div>

    </section>

    {/* ================= BOOKING FORM ================= */}

    <section className="pb-20">

      <div className="container mx-auto px-8">

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl max-w-5xl mx-auto rounded-3xl p-10">

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT SIDE */}

            <div>

              <label className="block mb-2 font-semibold">
                Parking Location
              </label>

              <input
                type="text"
                value={parking?.name || ""}
                readOnly
                className="w-full bg-slate-700 rounded-xl p-4 text-white"
              />

              <label className="block mt-6 mb-2 font-semibold">
                Vehicle Number
              </label>

              <input
                type="text"
                placeholder="KA01AB1234"
                value={vehicleNumber}
                onChange={(e) =>
                  setVehicleNumber(e.target.value)
                }
                className="w-full bg-slate-700 rounded-xl p-4 text-white"
              />

              <label className="block mt-6 mb-2 font-semibold">
                Vehicle Type
              </label>

              <select
                value={vehicleType}
                onChange={(e) =>
                  setVehicleType(e.target.value)
                }
                className="w-full bg-slate-700 rounded-xl p-4 text-white"
              >

                <option>Car</option>
                <option>Bike</option>
                <option>Scooter</option>

              </select>

              <label className="block mt-6 mb-2 font-semibold">
                Booking Date
              </label>

              <input
                type="date"
                value={bookingDate}
                onChange={(e) =>
                  setBookingDate(e.target.value)
                }
                className="w-full bg-slate-700 rounded-xl p-4 text-white"
              />

            </div>
                          {/* RIGHT SIDE */}

                          <div>

<label className="block mb-2 font-semibold">
  Entry Time
</label>

<input
  type="time"
  value={entryTime}
  onChange={(e) => setEntryTime(e.target.value)}
  className="w-full bg-slate-700 rounded-xl p-4 text-white"
/>

<label className="block mt-6 mb-2 font-semibold">
  Exit Time
</label>

<input
  type="time"
  value={exitTime}
  onChange={(e) => setExitTime(e.target.value)}
  className="w-full bg-slate-700 rounded-xl p-4 text-white"
/>

<label className="block mt-6 mb-2 font-semibold">
  Payment Method
</label>

<select
  value={paymentMethod}
  onChange={(e) => setPaymentMethod(e.target.value)}
  className="w-full bg-slate-700 rounded-xl p-4 text-white"
>

  <option>UPI</option>
  <option>Credit Card</option>
  <option>Debit Card</option>
  <option>Cash</option>

</select>

<label className="block mt-6 mb-2 font-semibold">
  Total Amount
</label>

<input
  type="text"
  readOnly
  value={`₹${amount}`}
  className="w-full bg-slate-700 rounded-xl p-4 text-cyan-400 text-xl font-bold"
/>

</div>

</div>

<div className="text-center mt-10">

<button
onClick={async () => {

  const parkingIds = {
    "City Mall Parking": 1,
    "Airport Parking": 2,
    "Metro Parking": 3,
    "Metro Station Parking": 3,
  };

  if (vehicleNumber.trim() === "") {
    alert("Please enter vehicle number");
    return;
  }

  if (bookingDate === "") {
    alert("Please select booking date");
    return;
  }

  if (!entryTime || !exitTime) {
    alert("Please select entry and exit time");
    return;
  }

  if (amount === 0) {
    alert("Invalid booking duration");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:3000/reservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          parking_id: parkingIds[parking?.name],
          vehicle_number: vehicleNumber,
          vehicle_type: vehicleType,
          booking_date: bookingDate,
          entry_time: entryTime,
          exit_time: exitTime,
          payment_method: paymentMethod,
          amount,
        }),
      }
    );

    const result = await response.json();

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Reservation Confirmed!");

    setVehicleNumber("");
    setBookingDate("");
    setEntryTime("");
    setExitTime("");
    setPaymentMethod("UPI");
    setAmount(0);

    loadReservations();

  } catch (err) {

    console.error(err);
    alert("Unable to connect to server.");

  }

}}
className="bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-xl text-lg font-bold transition"
>
Confirm Reservation
</button>

</div>

</div>

</div>

</section>
      {/* ================= MY RESERVATIONS ================= */}

      <section className="pb-20">

        <div className="container mx-auto px-8">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl max-w-5xl mx-auto rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              My Reservations
            </h2>

            <div className="space-y-6">

              {reservations.length === 0 ? (

                <div className="text-center text-gray-400">
                  No Reservations Found
                </div>

              ) : (

                reservations.map((reservation) => (

                  <div
                    key={reservation.reservation_id}
                    className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                  >

                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      Reservation #{reservation.reservation_id}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">

                      <p>
                        <b>Parking:</b>{" "}
                        {reservation.parking_name}
                      </p>

                      <p>
                        <b>Vehicle:</b>{" "}
                        {reservation.vehicle_number}
                      </p>

                      <p>
                        <b>Vehicle Type:</b>{" "}
                        {reservation.vehicle_type}
                      </p>

                      <p>
                        <b>Date:</b>{" "}
                        {reservation.booking_date?.split("T")[0]}
                      </p>

                      <p>
                        <b>Entry:</b>{" "}
                        {reservation.entry_time}
                      </p>

                      <p>
                        <b>Exit:</b>{" "}
                        {reservation.exit_time}
                      </p>

                      <p>
                        <b>Payment:</b>{" "}
                        {reservation.payment_method}
                      </p>

                      <p>
                        <b>Amount:</b> ₹
                        {reservation.amount}
                      </p>

                    </div>

                    <div className="mt-6 text-right">

                      <button
                        onClick={async () => {

                          const confirmCancel = window.confirm(
                            "Are you sure you want to cancel this reservation?"
                          );

                          if (!confirmCancel) return;

                          try {

                            const response = await fetch(
                              `http://localhost:3000/reservation/${reservation.reservation_id}`,
                              {
                                method: "DELETE",
                              }
                            );

                            const result =
                              await response.json();

                            if (!result.success) {
                              alert(result.message);
                              return;
                            }

                            alert(result.message);

                            loadReservations();

                          } catch (err) {

                            console.error(err);
                            alert(
                              "Unable to cancel reservation."
                            );

                          }

                        }}
                        className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold"
                      >
                        Cancel Reservation
                      </button>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>

      </section>
      </div>
      
  );
}

export default Reservation;