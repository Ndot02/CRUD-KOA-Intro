import { students } from "../db/db.js";
let nextId = 3;

const getAllStudents = () => {
  return students;
};

const getStudentById = (id) => {
  return students.find((student) => student.id === parseInt(id));
};

const addStudent = (studentData) => {
  const newStudent = {
    id: nextId,
    rollNo: studentData.rollNo,
    name: studentData.name,
    marks: studentData.marks,
    gender: studentData.gender,
  };
  students.push(newStudent);
  nextId++;
  return newStudent;
};

const updateStudent = (id, newData) => {
  const studentIndex = students.findIndex((d) => d.id === parseInt(id)); //parse int halna parxa 
  if (studentIndex === -1) return null;

  students[studentIndex] = {
    id: parseInt(id),
    rollNo: newData.rollNo || students[studentIndex].rollNo,
    name: newData.name || students[studentIndex].name,
    marks: newData.marks || students[studentIndex].marks,
    gender: newData.gender || students[studentIndex].gender,
  };
  return students[studentIndex];
};

const deleteStudent = (id) => {
  const studentIndex = students.findIndex((d) => d.id === parseInt(id));
  if (studentIndex === -1) {
    return null; // Student not found
  }
  const deletedStudent = students[studentIndex];
  students.splice(studentIndex, 1);
  return deletedStudent;
};

const validateStudent=(student)=>{
if (!student.name || !student.rollNo  || !student.marks || !student.gender ){
return false;
}
return true;
}

export {getAllStudents,getStudentById,updateStudent,addStudent,deleteStudent,validateStudent}