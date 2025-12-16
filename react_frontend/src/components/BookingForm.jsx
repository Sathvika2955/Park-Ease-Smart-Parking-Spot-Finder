const BookingForm = ({ slot }) => {
  return (
<div>
<h3>Book Slot {slot.slotNumber}</h3>
 
      <input type="text" placeholder="Vehicle Number" />
<input type="time" />
<input type="time" />
 
      <button>Confirm Booking</button>
</div>
  );
};
 
export default BookingForm;