import React, { useEffect, useState } from "react";
import SlotCard from "../components/SlotCard";
import api from "../services/api";
//import "./SlotList.css";
 
const SlotList = () => {
  // State to store all slots from backend
  const [slots, setSlots] = useState([]);
 
  // State to store selected slot
  const [selectedSlot, setSelectedSlot] = useState(null);
 
  // Fetch slots from backend when page loads
  useEffect(() => {
    api.get("/slots")
      .then((res) => {
        setSlots(res.data);
      })
      .catch((err) => {
        console.error("Error fetching slots:", err);
      });
  }, []);
 
  // Handle slot selection
  const handleSelect = (slot) => {
    // Do not allow selecting booked slots
    if (slot.status === "BOOKED") return;
    setSelectedSlot(slot);
  };
 
  return (
<div>
<h2>Parking Slot Availability</h2>
 
      {/* Slot Grid */}
<div className="slot-grid">
        {slots.map((slot) => (
<SlotCard
            key={slot._id}
            slot={slot}
            onSelect={handleSelect}
          />
        ))}
</div>
 
      {/* Selected Slot Information */}
      {selectedSlot && (
<div style={{ marginTop: "20px" }}>
<h3>Selected Slot Details</h3>
<p>
            Slot Number: <strong>{selectedSlot.slotNumber}</strong>
</p>
<p>
            Status: <strong>{selectedSlot.status}</strong>
</p>
</div>
      )}
</div>
  );
};
 
export default SlotList;