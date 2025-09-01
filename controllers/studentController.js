import * as  Student from "../models/Student.js";

const showAllStudents = async (ctx) => {
  const students = Student.getAllStudents();
  ctx.body = {
    success: true,
    message: "Here are all students",
    data: students,
  };
};
const showStudentById= async (ctx)=>{
  const studentId= ctx.params.id;
  const student= Student.getStudentById(studentId);
  if(!student){
    ctx.throw(404,"Student not found")
  }
  ctx.body={
    success:true,
    message:"The student by ID is ..."
    ,data: student
  }
}
const createNewStudent = async (ctx) => {
  const students = ctx.request.body;

  if (!Student.validateStudent(students)) {
    ctx.throw(400, "Provide valid data");
  }
  const newStudent = Student.addStudent(students);
  ctx.status = 201;
  ctx.body = {
    message: "Student created successfully",
    status: true,
    data: newStudent,
  };
};

const updateExistingStudent = async (ctx) => {
  const studentId = ctx.params.id;
  const newData = ctx.request.body;
  const updatedStudent = Student.updateStudent(studentId, newData);

  if (!updatedStudent) {
    ctx.throw(404, "Student not found");
  }
  ctx.body = {
    status: true,
    message: "Student data updated",
    data: updatedStudent,
  };
};

const removeStudent = async (ctx) => {
  const studentId = ctx.params.id;

  const deletedStudent = Student.deleteStudent(studentId);

  if (!deletedStudent) {
    ctx.throw(404, "Student not found");
  }

  ctx.body = {
    success: true,
    message: "Student deleted successfully!",
    data: deletedStudent,
  };
};


export {
    showAllStudents,createNewStudent,updateExistingStudent,removeStudent,showStudentById
}