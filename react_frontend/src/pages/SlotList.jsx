import React, { useEffect, useState } from "react";
import SlotCard from "../components/SlotCard";
import BookingForm from "../components/BookingForm";
import "../components/SlotGrid.css";

//import api from "../services/api";

const SlotList = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

 useEffect(() => {
  fetch("http://localhost:5000/api/slots/all")
    .then((res) => res.json())
    .then((data) => {
      setSlots(data.slots); // ✅ CORRECT
    })
    .catch((err) => {
      console.error("Error fetching slots:", err);
    });
}, []);

  const handleSelect = (slot) => {
    // ✅ FIX: backend uses isAvailable
    if (slot.isAvailable === false) return;
    setSelectedSlot(slot);
  };

  return (
    <div>
      <h2>Parking Slot Availability</h2>

      <div className="slot-grid">
        {slots.map((slot) => (
          <SlotCard
            key={slot._id || slot.slotNumber}
            slot={slot}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {selectedSlot && (
        <>
          <div style={{ marginTop: "20px" }}>
            <h3>Selected Slot Details</h3>
            <p>
              Slot Number: <strong>{selectedSlot.slotNumber}</strong>
            </p>
            <p>
              Status:{" "}
              <strong>
                {selectedSlot.isAvailable ? "AVAILABLE" : "BOOKED"}
              </strong>
            </p>
          </div>

          {/* ✅ Booking form */}
          <BookingForm slot={selectedSlot} />
        </>
      )}
    </div>
  );
};

export default SlotList;
