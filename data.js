//array of student object, info + update student info
const students = [];

function addStudent(name,age, gender,className, hobby){
  const student = {
    name: name.trim(),
    age: parseInt(age),
    gender: gender.trim().toUpperCase(),
    hobby: hobby.trim(),
  }
  students.push(student);
}
//update student info
function updateStudent(name, newData){
  //we start by finding the index of student in array
  const index = students.findIndex((student)=> student.name.toLowerCase() === name.toLowerCase()
  );
  if(index !==1){
    students[index]={...students[index],...newData};
    return true;}
  return false;
}
