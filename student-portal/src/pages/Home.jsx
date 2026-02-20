import React, { useState, useEffect } from "react";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents =
      JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div>
      <h1>Student Portal</h1>
      <p style={{ marginBottom: "20px", color: "#64748b" }}>
        Manage students efficiently
      </p>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <p>Total Students: {students.length}</p>
      )}
    </div>
  );
}

export default Home;