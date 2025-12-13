import React from "react";
import "./SlotGrid.css";
 
const SlotGrid = ({ slots }) => {
  return (
<div className="slot-grid">
      {slots.map(slot => (
<div 
          key={slot._id} 
          className={`slot-box ${slot.status === "available" ? "available" : "booked"}`}
>
          {slot.slotNumber}
</div>
      ))}
</div>
  );
};
 
export default SlotGrid;