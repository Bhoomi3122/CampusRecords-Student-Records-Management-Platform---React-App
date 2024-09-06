// src/components/AddStudent.js
import React, { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");

  const validatePhone = (phone) => /^\d{10}$/.test(phone); // Check if phone number is 10 digits

  const handleAddStudent = () => {
    if (!validatePhone(phone)) {
      alert("Invalid phone number. Please enter a 10-digit number.");
      return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    if (students.some((student) => student.rollno === rollno)) {
      alert("Roll number already exists.");
      return;
    }

    students.push({ name, rollno, phone, branch });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student added successfully!");

    // Clear input fields
    setName("");
    setRollno("");
    setPhone("");
    setBranch("");
  };

  return (
    <div>
      <h3 className="option-head">Add Student</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Roll Number"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
}

export default AddStudent;
