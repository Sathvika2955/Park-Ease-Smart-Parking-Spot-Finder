import React from "react";
import SlotList from "./pages/SlotList";
 
function App() {
  const slots = [
    "9:00 - 10:00 AM",
    "10:00 - 11:00 AM",
    "11:00 - 12:00 PM",
    "1:00 - 2:00 PM",
    "2:00 - 3:00 PM",
    "3:00 - 4:00 PM"
  ];
 
  return (
<div className="container">
<h1>Available Slots</h1>
<SlotList slots={slots} />
</div>
  );
}
 
export default App;