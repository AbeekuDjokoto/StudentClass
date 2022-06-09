
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
        if(pluralCourses > 0 && pluralCourses === isNaN){
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

function createStudent(name, grade, gpa, courses, age){
    let newStudent = new Student(name, grade, age, courses, gpa)
    console.log(newStudent)
    return newStudent
}

function enrollStudent(student){
    studentRoll.push(student)
}

function searchStudent(name){
        return name === "michael"
}

function myFindMethod(query){

    function searchStudent(name){
        return name === query;
}
return searchStudent;
}

function filterStudentsByGrade(grade){
        return grade === "A"
}

function filterStudentsByMinAge(minAge){
    return Math.min(...minAge)
}

function filterStudentsByMaxAge(maxAge){
    return Math.max(...maxAge)
}
