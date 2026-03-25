import React, { useState } from "react";

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let tempErrors = {};

    if (!form.name) tempErrors.name = "Name is required";
    if (!form.email.includes("@")) tempErrors.email = "Valid email required";
    if (!/^\d{10}$/.test(form.phone))
      tempErrors.phone = "Phone must be 10 digits";

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      const students =
        JSON.parse(localStorage.getItem("students")) || [];
      students.push(form);
      localStorage.setItem("students", JSON.stringify(students));

      setSuccess("Student added successfully!");
      setForm({ name: "", email: "", phone: "", gender: "" });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-center mb-8">Add New Student</h2>
      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label className="input-label">Full Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Doe"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label className="input-label">Phone Number</label>
          <input
            type="text"
            placeholder="10-digit number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="input-group">
          <label className="input-label">Gender</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="Male"
                checked={form.gender === "Male"}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
              />
              Male
            </label>

            <label className="radio-label">
              <input
                type="radio"
                value="Female"
                checked={form.gender === "Female"}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
              />
              Female
            </label>
          </div>
        </div>
        
        <button type="submit" className="primary" style={{ marginTop: "8px" }}>
          Add Student
        </button>
      </form>

      {success && <div className="success">{success}</div>}
    </div>
  );
}

export default AddStudent;