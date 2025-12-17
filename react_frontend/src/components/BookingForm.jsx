import React, { useState } from "react";

const BookingForm = ({ slot }) => {
  const [vehicleNo, setVehicleNo] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation (as you requested)
    if (!vehicleNo || !slot) {
      setMessage("Please fill all fields");
      return;
    }

    // Clear message if validation passes
    setMessage("");

    // Temporary success action
    console.log("Booking Details:", {
      slotNumber: slot.slotNumber,
      vehicleNo,
      startTime,
      endTime,
    });

    alert(`Slot ${slot.slotNumber} booked successfully!`);

    // Optional: clear form
    setVehicleNo("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Book Slot {slot.slotNumber}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle Number"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
        />

        <br /><br />

        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <br /><br />

        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <br /><br />

        <button type="submit">Confirm Booking</button>
      </form>

      {/* Error / Info Message */}
      {message && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default BookingForm;
