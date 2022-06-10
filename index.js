
class Student{
_name
_grade
_gpa
_courses
_age

    constructor(name, grade, gpa, courses = [], age){
        this._name = name,
        this._grade = grade,
        this._gpa = gpa,
        this._courses = courses,
        this._age = age
    }

    
    setName(identityName){
        if(identityName.length > 1 && identityName.length === ""){
            this._name = identityName;
            console.log('Success');
        }else{
            console.log('Your name input should not be empty or less than one character')
        }
    }

    getName(){
        return this._name;
    }

    setCourses(pluralCourses){
        if(pluralCourses > 0){
            this._courses = pluralCourses
            console.log('Success')
        }else{
            console.log('The input chosen is invalid, try again.')
        }
    }

    getCourses(){
        return this._courses
    }

    setGrade(newGrade){
       this._grade = newGrade
    }

    getGrade(){
        return this._grade;
    }

    setGpa(score){
        if(score > 1.5){
          this._gpa = parseFloat(score.toFixed(1));
            console.log('Success');
        }else{
            console.log('You failed, try again next year')
        }
    }

    getGpa(){
        return this._gpa
    }

    setAge(aged){
        if(aged >= 18){
            this._age = aged;
            console.log('You are 18 or above');
        }else{
            console.log('Sorry, you are below 18')
        }
    }

    getAge(){
        return this._age
    }

    sayHello(){
        console.log(`Hello ${this._name}, you are ${this._age}`)
    }

    printCourses(){
        console.log(`These are the number of courses ${this._courses}`)
    }

    calculateGpa(){
        console.log(`Your gpa is ${this._gpa}`)
    }
}

class MiddleSchooler extends Student{
    constructor(name, grade, gpa, courses = [], age){
        super(name, grade, gpa, courses = [], age)
    }
}

let studentRoll = [];

class Person {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}


    let button = document.getElementById('btn')
    let fname = document.getElementById('fname')
    let grade = document.getElementById('grade') 
    let gpa = document.getElementById('gpa')
    let courses = document.getElementById('courses')
    let age = document.getElementById("age") 
    let row = 1; 

button.addEventListener('click', (event) =>{
    event.preventDefault()
    if(fname.value === "" || fname.value.length > 12 ){
        fname.nextElementSibling.style.color = "red"
        fname.nextElementSibling.style.fontSize = "12px"
        fname.nextElementSibling.innerHTML ="This field should not be empty and must not exceed 12 characters"
        return
    }else if(age.value < 18){
            age.nextElementSibling.style.color = "red"
            age.nextElementSibling.style.fontSize = "12px"
            age.nextElementSibling.innerHTML ="You are too young"
        return
    }else if(gpa.value < 1.5){
        gpa.nextElementSibling.style.color = "red"
        gpa.nextElementSibling.style.fontSize = "12px"
        gpa.nextElementSibling.innerHTML ="Requirement is 2.0 and above"
        return
    }else if(grade.value < 70){
        grade.nextElementSibling.style.color = "red"
        grade.nextElementSibling.style.fontSize = "12px"
        grade.nextElementSibling.innerHTML ="Sorry the pass mark is 70 and above"
        return
    }else if(courses.value === "" || courses.value >= 18){
         courses.nextElementSibling.style.fontSize = "12px"
         courses.nextElementSibling.style.color = "red"
         courses.nextElementSibling.innerHTML ="This field cannot be left empty"
        return
    }
    
    let display = document.getElementById('display')
    let newRow = display.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = fname.value;
    cell2.innerHTML = age.value;
    cell3.innerHTML = gpa.value;
    cell4.innerHTML = grade.value;
    cell5.innerHTML = courses.value;

    row++;

    // listboxresults()
})

// function listboxresults(){
//     let spanresult = document.getElementById("result")
//     spanresult.value = "";
//     let x = document.getElementById('asl');
//     for(let i = 0; i<x.options.length; i++){
//        if(x.options[i].selected === true){
//            spanresult.value += x.options[i].value + " ";
//            document.getElementById("result").innerHTML = spanresult.value;
//        }
//        if(document.getElementById("result").value === ""){
//            spanresult.innerHTML = "Please select at least on list item"
//        } 
//     }
// }

function tableSearch(){
    let input, filter, table, tr, td, i, txtValue;

    // Initializing Variables
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase();
    table = document.getElementById('display')
    tr = table.getElementsByTagName("tr")

    for(let i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
}


function createStudent(name, grade, gpa, courses, age){
    let newStudent = new Student(name, grade, age, courses, gpa)
    console.log(newStudent)
    return newStudent
}

function enrollStudent(student){
    studentRoll.push(student)
}

function searchStudent(name){
        return studentRoll.filter((s) => s.getName().includes(name).toUpppercase());
}

function filterStudentsByGrade(grade){
    return studentRoll.filter((s) => s.getGrade() === grade);
}

function filterStudentsByMinAge(minAge){
    return studentRoll.filter((s) => s.getAge() > minAge)
}

function filterStudentsByMaxAge(maxAge){    
    return studentRoll.filter((s) => s.getAge() < maxAge)
}



