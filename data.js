//array of student object, info + update student info
// const {countByGender, searchByName, searchByClass, searchByAge, searchByHobby}= require("./utils")
const students = [];

//for JSON
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'students.json');

function loadStudents(){
  try{
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  }catch{
    return[]
  }
}

function saveStudents(students){
  fs.writeFileSync(filePath,JSON.stringify(students,null,2))
}

function addStudent(name,age, gender,className, hobby){
  const students = loadStudents();
  const student = {
    name: name.trim(),
    age: parseInt(age),
    gender: gender.trim().toUpperCase(),
    className: className.trim(),
    hobby: hobby.trim(),
  }
  students.push(student);
  saveStudents(students)
}
//update student info
function updateStudent(name, newData){
  //we start by finding the index of student in array
  const index = students.findIndex((student)=> student.name.toLowerCase() === name.toLowerCase()
  );
  if(index !==1){
    students[index]={...students[index],...newData};
    saveStudents(students);
    return true;}
  return false;
}


module.exports = {students,addStudent, updateStudent, loadStudents};