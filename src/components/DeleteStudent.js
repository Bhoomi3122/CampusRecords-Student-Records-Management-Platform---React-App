import React,{useState} from 'react'

const DeleteStudent = () => {
  const [rollno,setRollno]=useState("");
  const [studentFound,setStudentFound]=useState(false);
  const handleSearchStudent=()=>{
    const students = JSON.parse(localStorage.getItem("students"))||[];
    const foundStudent = students.find((student)=>student.rollno===rollno);
    if(foundStudent)
    {
        setStudentFound(true);
    }
    else{
        alert("Student not found!");
        setStudentFound(false);
    }
  }
  const handleDeleteStudent = ()=>{
    let students = JSON.parse(localStorage.getItem("students")) || [];
    const updatedStudents  = students.filter((student)=>student.rollno!==rollno);
    if(updatedStudents.length===students.length)
    {
        alert("Student not found!");
    }
    else{
        localStorage.setItem("students",JSON.stringify(updatedStudents));
        alert("Student deleted sucessfully!");
    }
    setRollno("");
    setStudentFound(false);
  }
  return (
    <div>
      <h3 className="option-head">Delete Student</h3>
      <div className="mb-3">
        <input
           type="text"
           className='form-control my-3'
           placeholder='Enter Roll Number'
           value={rollno}
           onChange={(e)=>setRollno(e.target.value)}
        />
        <button className="btn btn-info mb-3" onClick={handleSearchStudent}>Search Student</button>
        {studentFound && (
            <>
            <p className='delete-para'>Student with Roll Number {rollno} found. Do you want to delete?</p>
            <button className="btn btn-danger" onClick={handleDeleteStudent}>Delete Student</button>
            </>
        )}
      </div>
    </div>
  )
}

export default DeleteStudent
