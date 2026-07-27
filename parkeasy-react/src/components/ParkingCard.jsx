import { useNavigate } from "react-router-dom";

function ParkingCard({ parking }) {
  const navigate = useNavigate();

  const handleBook = () => {
    localStorage.setItem("selectedParking", JSON.stringify(parking));
    navigate("/reservation");
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px",
        width: "280px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{parking.parking_name}</h2>
      

      <p>
        <strong>Location:</strong> {parking.location}
      </p>

      <p>
        <strong>Available Slots:</strong> {parking.available_slots}
      </p>

      <p>
        <strong>Price:</strong> ₹{parking.price_per_hour}/hour
      </p>

      <button onClick={handleBook}>
        Book Now
      </button>
    </div>
  );
}

export default ParkingCard;