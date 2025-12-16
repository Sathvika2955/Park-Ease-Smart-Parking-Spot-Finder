const SlotCard = ({ slot, onSelect }) => {
  const status = slot.isAvailable ? "AVAILABLE" : "BOOKED";

  return (
    <div
      className={`slot-card ${status.toLowerCase()}`}
      onClick={() => onSelect(slot)}
    >
      <h3>Slot {slot.slotNumber}</h3>
      <p>{status}</p>
    </div>
  );
};

export default SlotCard;
