// src/components/SearchStudent.js
import React, { useState } from "react";

function SearchStudent() {
  const [rollno, setRollno] = useState("");
  const [student, setStudent] = useState(null);

  const handleSearchStudent = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const foundStudent = students.find((student) => student.rollno === rollno);
    if (foundStudent) {
      setStudent(foundStudent);
    } else {
      alert("Student not found!");
      setStudent(null);
    }
  };

  return (
    <div>
      <h3 className="option-head">Search Student</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Roll Number"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
      </div>
      <button className="btn btn-info" onClick={handleSearchStudent}>
        Search Student
      </button>
      {student && (
        <div className="mt-3 search-div">
          <h4>Student Details:</h4>
          <p>Roll Number: {student.rollno}</p>
          <p>Name: {student.name}</p>
          <p>Phone: {student.phone}</p>
          <p>Branch: {student.branch}</p>
        </div>
      )}
    </div>
  );
}

export default SearchStudent;
