// src/App.js
import React, { useState } from "react";
import AddStudent from "./components/AddStudent";
import SearchStudent from "./components/SearchStudent";
import UpdateStudent from "./components/UpdateStudent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteStudent from "./components/DeleteStudent";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderForm = () => {
    switch (selectedOption) {
      case "add":
        return <AddStudent />;
      case "search":
        return <SearchStudent />;
      case "update":
        return <UpdateStudent />;
      case "delete":
        return <DeleteStudent/>;
      default:
        return <AddStudent />;
    }
  };

  return (
    <div className="container">
      <h2 className="main-head text-center mt-4">CampusRecords - Student Records Management Platform</h2>
      <p className="text-center head-para">Welcome to CampusRecords, Please select an option to use.</p>
      <hr />
      <ul className="nav justify-content-center mb-4">
        <li className="nav-item">
          <button className="btn btn-primary mx-2" onClick={() => setSelectedOption("add")}>
            Add Student
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger mx-2" onClick={() => setSelectedOption("search")}>
            Search Student
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-warning mx-2" onClick={() => setSelectedOption("update")}>
            Update Student
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-success mx-2" onClick={() => setSelectedOption("delete")}>
            Delete Student
          </button>
        </li>
      </ul>
      <div id="form-container">{renderForm()}</div>
    </div>
  );
}

export default App;
