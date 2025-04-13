const {addStudent, updateStudent, loadStudents} = require('./data');//deleting array and focus
const {countByGender, searchByName, searchByClass, searchByAge, searchByHobby} = require("./utils");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
students = loadStudents()//tis for retriving form JSON
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
        });
        break;
      case '2':
        console.table(loadStudents())
        return mySystem()
        break;
      case '3':
        rl.question("enter student's name: ", (name)=>{
          let found = students.findIndex((stdt)=>stdt.name.toLowerCase() === name.toLocaleLowerCase());
          
          if(found !== -1)
            console.table(searchByName(students, name));
          else
            console.log(`\n\tThe name you entered not found\n\tTry again later!`);
          mySystem();
        });
        break;
      case '4':
        rl.question("enter student's ClassRoom: ", (className)=>{
          let found = students.findIndex((stdt)=>stdt.className.toLowerCase() === className.toLocaleLowerCase());
          
          if(found !== -1)
            console.table(searchByClass(students, className));
          else
            console.log(`\n\tThe classRoom entered not found\n\tTry again later!`);
          mySystem();
        });
        break;
      case '5':
        rl.question('enter age: ', (age)=>{
          console.table(searchByAge(students, age));
          mySystem()
        });
        break;
      case '6':
        rl.question('enter hobby: ', (hobi)=>{
          console.table(searchByHobby(students, hobi));
          mySystem()
        });
        break;
      case '7':
        let ababazwe = countByGender(students);
        console.log(`\tMale: ${ababazwe.male}\n\tFemale: ${ababazwe.female}`)
        if(1)
          {
          if(ababazwe.female > ababazwe.male)
          console.log("females are more than male in our class");
          else
            console.log("males are more than female in our class")
          
          }
        return mySystem();
        break;
      case '8':
        rl.question("enter student's name to update: ", (name)=>{
          ngahoUpdate(name, mySystem);
          
        });
        break;
      case '0':
        console.log("👋 Exiting. Bye!");
        rl.close();
        break;
      default:
        console.log("Wrong choice. Try again.\n");
        mySystem()
    }
  })
}

function ngahoUpdate(name, callback){
  rl.question("enter age:",(age)=>{
    age=parseInt(age);
    rl.question("enter gender:",(gender)=>{
      gender=gender.trim().toLowerCase();
      rl.question("enter className:",(className)=>{
        className=className.trim().toLowerCase();
        rl.question("enter hobby:",(hobby)=>{
          hobby=hobby.trim().toLowerCase();
          updateStudent(name,{age,gender,className,hobby})
          callback();
        })
      })
    })
  })
}

mySystem()