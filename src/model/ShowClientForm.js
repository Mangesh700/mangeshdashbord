import React, { useState } from "react";

const ShowClientForm = ({ onClose }) => {
  // Initial dummy franchise data
  const [franchiseData, setFranchiseData] = useState([
    { id: 1, name: "client 1" },
    { id: 2, name: "client 2" },
    { id: 3, name: "client 3" },
    { id: 4, name: "client 4" },
    { id: 5, name: "client 5" },
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
      <h4>Previous Client Forms</h4>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Client..."
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

export default ShowClientForm;
