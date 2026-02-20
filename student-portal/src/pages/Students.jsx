import React, { useState, useEffect } from "react";

function Students() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Loading students...</h2>
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>{error}</h2>
      </div>
    );

  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Student List</h2>
      </div>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;