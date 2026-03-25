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
      <div className="text-center mb-8">
        <h2>Student List</h2>
        <p>A directory of all currently enrolled students.</p>
      </div>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;