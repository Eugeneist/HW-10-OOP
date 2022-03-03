"use strict"

class Person {
    constructor(firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }

    celebrate() {
        return "Happy Birthday, lets celebrate!";
    }
}


class Employee extends Person {
    constructor(firstName, lastName, age, birthDayDate, jobPosition) {
        super(firstName, lastName, age, birthDayDate);
        this.jobPosition = jobPosition;
        this.birthDayDate = birthDayDate;
    }

    #salary = 10000;

    getYearSalary() {
        const myYearSalary = this.salary * 12;
        return `Моя годовая зарплата ${myYearSalary}$!`;
    }

    // celebrate() {
    //     const today = new Date();
    //     const day = (new Date(today.getFullYear(), this.birthDayDate.getMonth(), this.birthDayDate.getDate())).getDay();
    //     if (day === 0 || day === 6) {
    //         return "Happy Birthday, lets celebrate!";
    //     } else {
    //         return "Happy Birthday, but I need to work!";
    //     }
    // }

    celebrate() {
        const day = (this.birthDayDate.setFullYear()).getDay();
        if (day === 0 || day === 6) {
            return "Happy Birthday, lets celebrate!";
        } else {
            return "Happy Birthday, but I need to work!";
        }
    }

}


const user1 = new Person("John", "Snow", 25, "1993-12-12");
console.log(user1.celebrate());
console.log(user1.birthDayDate);

const user2 = new Employee("Mike", "Brown", 35, "1993-10-10", "driver");
console.log(user2.birthDayDate);
console.log(user2.celebrate());











