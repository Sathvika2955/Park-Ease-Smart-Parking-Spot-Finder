import React, { useState } from "react";

const BookingForm = ({ slots = [], bookSlot }) => {
  const [vehicleNo, setVehicleNo] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [message, setMessage] = useState("");
  const [canBook, setCanBook] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vehicleNo || !selectedSlot) {
      setMessage("Please fill all fields");
      setCanBook(false);
      return;
    }

    const slot = slots[Number(selectedSlot) - 1];

    if (!slot.isAvailable) {
      setMessage("Slot already booked");
      setCanBook(false);
      return;
    }

    setMessage(`Slot ${selectedSlot} is available`);
    setCanBook(true);
  };

  const confirmBooking = () => {
    const slot = slots[Number(selectedSlot) - 1];
    bookSlot(slot.slotNumber);
    setMessage(`Slot ${selectedSlot} booked successfully`);
    setCanBook(false);
    setSelectedSlot("");
    setVehicleNo("");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Book a Slot</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle Number"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
        />

        <br /><br />

        <select
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
        >
          <option value="">Select Slot</option>
          {slots.map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Slot {index + 1}
            </option>
          ))}
        </select>

        <br /><br />

        <button type="submit">Check Availability</button>
      </form>

      {canBook && (
        <button onClick={confirmBooking}>
          Confirm Booking
        </button>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
