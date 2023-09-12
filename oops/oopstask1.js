// Create a Student class and initialize it with name and roll number. Make methods to :

// Display - It should display all informations of the student.

// setAge - It should assign age to student

// setMarks - It should assign marks to the student.
 class student{
    constructor(name,rollnumber)
    {
        this.name=name
        this.rollnumber=rollnumber
    }
    display()
    {
        console.log(this.name,this.rollnumber)
    }
    setage(age){
        this.age=age
        console.log(this.age)
    }
    setmark(mark){
        this.mark=mark
        console.log(this.mark);
    }
 }
 obj = new student("amal",3)
 obj.display()
 obj.setage(24)
 obj.setmark(49)