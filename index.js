const {students,addStudent, updateStudent} = require('./data');
const {countByGender, searchByName, searchByClass, searchByAge, searchByHobby} = require("./utils");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function mySystem(){
  console.log(`
      ==============================
      🧑‍🎓 Student Management System
      ==============================
      1. Add Student
      2. View All Students
      3. Search Student by Name
      4. Search Students by Class
      5. Filter by Age
      6. Filter by Hobby
      7. Count Male/Female Students
      8. Update Student Info
      0. Exit`);
  
  rl.question("\n\nInjiza amahitamo yawe:",(hitamo)=>{
    switch(hitamo.trim()){
      case '1':
        rl.question("enter the name of student: ",(name)=>{
          rl.question("enter student's age: ", (age)=>{
            rl.question("enter student's gender(female/male): ", (gender)=>{
              rl.question("enter student's Class: ", (classname)=>{
                rl.question("enter student's hobby: ", (hobby)=>{
                  addStudent(name,age,gender,classname,hobby);
                  mySystem();
                })
              })
            })
          })
        })
        

    }
  })
}

mySystem()