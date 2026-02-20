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
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <p className="error">{errors.name}</p>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <p className="error">{errors.email}</p>

        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <p className="error">{errors.phone}</p>

        <div className="radio-group">
  <label>
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

  <label>
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
        <button type="submit">Submit</button>
      </form>

      <p className="success">{success}</p>
    </div>
  );
}

export default AddStudent;