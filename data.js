//array of student object, info + update student info
const students = [];

function addStudent(name,age, gender,className, hobby){
  const student = {
    name: name.trim(),
    age: parseInt(age),
    gender: gender.trim().toUpperCase(),
    className: className.trim(),
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
// let try examine both functions
// 1
addStudent('Kwizera Mugisha', 26, 'male', 'cst3', 'Music ');
// console.log(students)
//2- update name:'Karenzi Karake'
updateStudent('kwizera Mugisha',{name:'Karenzi Karake', age: 32})
console.log(students)