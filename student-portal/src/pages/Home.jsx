import React, { useState, useEffect } from "react";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents =
      JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="text-center" style={{ padding: "40px 0" }}>
      <h1 className="mb-6">Welcome to the Student Portal</h1>
      <p className="mb-8" style={{ fontSize: "1.125rem" }}>
        A simple and elegant way to manage student records.
      </p>

      {students.length === 0 ? (
        <p>No students added yet. Head to "Add Student" to create one.</p>
      ) : (
        <p style={{ fontWeight: 500, color: "var(--text-main)" }}>
          Total Students: {students.length}
        </p>
      )}
    </div>
  );
}

export default Home;