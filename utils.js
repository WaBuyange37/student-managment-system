
//start by counting gender
function countByGender(students){
  let male = 0;
  let female = 0;
  students.forEach((student)=>{
    if(student.gender.trim().toLowerCase() === 'male')
      male++;
    else if(student.gender.trim().toLowerCase() === 'female')
      female++;
    });
    return {male, female};
}

//search by name
function searchByName(students, name){
  return students.filter((student)=> student.name.trim().toLowerCase() === name.trim().toLowerCase())
}
//serch by class
function searchByClass(students, className){
  return students.filter((student)=> student.className.trim().toLowerCase() === className.trim().toLowerCase())
}
//by age
function searchByAge(students, age){
  return students.filter((student)=> student.age === parseInt(age))
}
//by hobby
function searchByHobby(students, hobby){
  return students.filter((student)=> student.hobby.toLowerCase().includes(hobby.toLowerCase()))
}



module.exports ={countByGender, searchByName, searchByClass, searchByAge, searchByHobby}