import axios from "axios"; //  import Export
import React, { useEffect, useState } from "react";

export const UserapiSearchFilter = () => {
  // Funtional Component
  const [users, setUsers] = useState([]); // States
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 4;

  useEffect(() => {
    // Hooks
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  //search
  //   console.log(users);
  //   console.log(search);

  const filteredUsers = users.filter((user) => {
    const searchTerm = (search || "").toLowerCase();

    return (
      (user.name || "").toLowerCase().includes(searchTerm) ||
      (user.email || "").toLowerCase().includes(searchTerm) ||
      (user.phone || "").toLowerCase().includes(searchTerm)
    );
  });

  //pagination
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(firstUserIndex, lastUserIndex);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // ✅ Loading UIS
  if (loading) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status"></div>

        <p>Loading Users...</p>
      </div>
    );
  }

  // ✅ Error UI
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    // JSX
    <div>
      <h2 className="mb-3">Users Directory</h2>
      {/* Search */}

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search User..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Users */}

      <div className="row">
        {currentUsers.map((user) => (
          <div key={user.id} className="col-md-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{user.name}</h5>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>

                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="d-flex gap-2 mt-3">
        <button
          className="btn btn-outline-primary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-primary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserapiSearchFilter;
