import { useEffect, useState } from "react";

function UsersApiExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // ✅ Loading UI
  if (loading) {
    return <p>Loading users...</p>;
  }

  // ✅ Error UI
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  // ✅ Success UI
  return (
    <div>
      <h3>User List</h3>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> <br />
            <small>{user.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersApiExample;
