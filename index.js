
class Student{
#name
#grade
#gpa
#courses
#age

    constructor(name, grade, gpa, courses = [], age){
        this.#name = name,
        this.#grade = grade,
        this.#gpa = gpa,
        this.#courses = courses,
        this.#age = age
    }

    
    setName(identityName){
        if(identityName.length > 1 && identityName.length === ""){
            this.name = identityName;
            console.log('Success');
        }else{
            console.log('Your name input should not be empty or less than one character')
        }
    }

    getName(){
        return this.name;
    }

    setCourses(pluralCourses){
        if(pluralCourses > 0 && pluralCourses === isNaN){
            this.courses = pluralCourses
            console.log('Success')
        }else{
            console.log('The input chosen is invalid, try again.')
        }
    }

    getCourses(){
        return this.courses
    }

    setGrade(newGrade){
       this.grade = newGrade
    }

    getGrade(){
        return this.grade;
    }

    setGpa(score){
        if(score > 1.5){
          this.gpa = parseFloat(score.toFixed(1));
            console.log('Success');
        }else{
            console.log('You failed, try again next year')
        }
    }

    getGpa(){
        return this.gpa
    }

    setAge(aged){
        if(aged >= 18){
            this.age = aged;
            console.log('You are 18 or above');
        }else{
            console.log('Sorry, you are below 18')
        }
    }

    getAge(){
        return this.age
    }

    sayHello(){
        console.log(`Hello ${this.#name}, you are ${this.#age}`)
    }

    printCourses(){
        console.log(`These are the number of courses ${this.#courses}`)
    }

    calculateGpa(){
        console.log(`Your gpa is ${this.#gpa}`)
    }
}

// let studentA = new Student("Mark", 80, 3.2, "Maths", 20);

// studentA.calculateGpa();
// studentA.sayHello();
// studentA.calculateGpa();