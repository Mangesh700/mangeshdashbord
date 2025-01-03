import React, { useState } from "react";

const ShowFranchiseForm = ({ onClose }) => {
  // Initial dummy franchise data
  const [franchiseData, setFranchiseData] = useState([
    { id: 1, name: "Franchise 1" },
    { id: 2, name: "Franchise 2" },
    { id: 3, name: "Franchise 3" },
    { id: 4, name: "Franchise 4" },
    { id: 5, name: "Franchise 5" },
    { id: 6, name: "Franchise 6" },
    { id: 7, name: "Franchise 7" },
    { id: 8, name: "Franchise 8" },
    { id: 9, name: "Franchise 9" },
    { id: 10, name: "Franchise 10" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter the new name for this franchise:");
    if (newName) {
      setFranchiseData((prevData) =>
        prevData.map((franchise) =>
          franchise.id === id ? { ...franchise, name: newName } : franchise
        )
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this franchise?")) {
      setFranchiseData((prevData) => prevData.filter((franchise) => franchise.id !== id));
    }
  };

  // Filter franchise list based on the search query
  const filteredFranchiseData = franchiseData.filter((franchise) =>
    franchise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h4>Previous Franchise Forms</h4>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search franchises..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredFranchiseData.length > 0 ? (
        <ul className="list-group">
          {filteredFranchiseData.map(({ id, name }) => (
            <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{name}</span>
              <div>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleEdit(id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No franchises match your search.</p>
      )}
    </div>
  );
};

export default ShowFranchiseForm;
