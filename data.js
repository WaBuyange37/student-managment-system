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
