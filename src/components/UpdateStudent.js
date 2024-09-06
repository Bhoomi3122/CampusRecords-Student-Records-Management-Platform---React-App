// src/components/UpdateStudent.js
import React, { useState } from "react";

function UpdateStudent() {
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [studentFound, setStudentFound] = useState(false);

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSearchStudent = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const foundStudent = students.find((student) => student.rollno === rollno);
    if (foundStudent) {
      setName(foundStudent.name);
      setPhone(foundStudent.phone);
      setBranch(foundStudent.branch);
      setStudentFound(true);
    } else {
      alert("Student not found!");
      setStudentFound(false);
    }
  };

  const handleUpdateStudent = () => {
    if (!validatePhone(phone)) {
      alert("Invalid phone number. Please enter a 10-digit number.");
      return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.map((student) =>
      student.rollno === rollno
        ? { ...student, name, phone, branch }
        : student
    );
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student details updated successfully!");
    setStudentFound(false);
    setRollno('');
  };

  return (
    <div>
      <h3 className="option-head">Update Student</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Roll Number"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
      </div>
      <button className="btn btn-info mb-3" onClick={handleSearchStudent}>
        Search Student
      </button>
      {studentFound && (
        <>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleUpdateStudent}>
            Update Student
          </button>
        </>
      )}
    </div>
  );
}

export default UpdateStudent;
