import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import SlotGrid from "../components/SlotGrid";
// import SlotGrid from "../components/SlotGrid";
 

const SlotList = () => {
  const [slots, setSlots] = useState([]);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [slotsPerPage] = useState(6);
 
  // Fetch slots from backend API
  const fetchSlots = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/admin/slots");
      const data = await res.json();
      setSlots(data.slots);
      setFilteredSlots(data.slots);
    } catch (error) {
      console.log("Error fetching slots:", error);
    }
  };
 
  useEffect(() => {
    fetchSlots();
  }, []);
 
  // Search filter
  useEffect(() => {
    let filtered = slots.filter((slot) =>
      slot.slotNumber.toString().includes(searchText)
    );
 
    // Sorting
    if (sortOrder === "asc") {
      filtered = filtered.sort((a, b) => a.slotNumber - b.slotNumber);
    } else if (sortOrder === "desc") {
      filtered = filtered.sort((a, b) => b.slotNumber - a.slotNumber);
    }
 
    setFilteredSlots(filtered);
  }, [searchText, sortOrder, slots]);
 
  // Pagination logic
  const indexOfLastSlot = currentPage * slotsPerPage;
  const indexOfFirstSlot = indexOfLastSlot - slotsPerPage;
  const currentSlots = filteredSlots.slice(indexOfFirstSlot, indexOfLastSlot);
 
  return (
<div style={{ padding: "20px" }}>
<h2>Parking Slot List</h2>
<h2>Parking Slot Visualization</h2>
<SlotGrid slots={slots} />
 
 
      {/* Search */}
<SearchBar searchText={searchText} setSearchText={setSearchText} />
 
      {/* Sort */}
<SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
 
      {/* Slot Grid */}
<SlotGrid slots={currentSlots} />
 
      {/* Pagination */}
<Pagination
        totalPosts={filteredSlots.length}
        postsPerPage={slotsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      
</div>
  );
};
 
export default SlotList;