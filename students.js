const fs = require("fs");
const loadStudents = () => {
  try {
    const data = fs.readFileSync("students.json").toString();
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
const saveStudents = (data) => {
  fs.writeFileSync("students.json", JSON.stringify(data));
};
const addStudents = (id, name, degrees, comment = "") => {
  const students = loadStudents();
  const student = students.find((element) => {
    return element.id === id;
  });
  let sum = 0;
  degrees.forEach((element) => {
    sum += element;
  });
  if (!student) {
    students.push({
      id,
      name,
      degrees,
      comment,
      total: sum,
    });
  }
  saveStudents(students);
  console.log(students);
};
const deleteStudent = (id) => {
  const students = loadStudents();
  const student = students.find((element) => {
    return element.id === id;
  });
  if (student) {
    let index = students.indexOf(student);
    students.splice(index, 1);
    saveStudents(students);
  }
  // const student = students.filter((element)=>{
  //     return element.id === id;
  // });
  // if(students.length != student.length){
  //     saveNotes(students)
  // }
  console.log(students);
};
const readStudent = (id) => {
  const students = loadStudents();
  const student = students.find((element) => {
    return element.id === id;
  });
  console.log(student);
};
const listStudents = () => {
  const students = loadStudents();
  students.forEach((element) => {
    console.log(element);
  });
};
const updateStudent = (searchId, name) => {
  let students = loadStudents();
  const student = students.find((element) => {
    return element.id === searchId;
  });
  if (student.id === searchId) {
    let index = students.indexOf(student);
    students[index].name = name;
    saveStudents(students);
  }
  console.log(students);
};
module.exports = {
  addStudents,
  deleteStudent,
  updateStudent,
  readStudent,
  listStudents,
};
