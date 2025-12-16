const SlotCard = ({ slot, onSelect }) => {
  return (
<div
      className={`slot-card ${slot.status.toLowerCase()}`}
      onClick={() => onSelect(slot)}
>
<h3>Slot {slot.slotNumber}</h3>
<p>{slot.status}</p>
</div>
  );
};