
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

module.exports ={countByGender, searchByName}