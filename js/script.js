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
    constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
        super(firstName, lastName, age, birthDayDate);
        this.jobPosition = jobPosition;
        this.#salary = salary;
    }

    #salary;

    getYearSalary() {
        const myYearSalary = this.salary * 12;
        return `Моя годовая зарплата ${myYearSalary}$!`;
    };

    celebrate() {
        const currentYear = new Date().getFullYear();
        const birthdayThisYear = new Date(new Date(this.birthDayDate).setFullYear(currentYear));
        if (isWeekend(birthdayThisYear))
            return super.celebrate();
        else
            return "Happy Birthday, but I need to work!";
    }

}

function isWeekend(date) {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}


const user1 = new Person("John", "Snow", 25, "1993-12-12");
console.log(user1.celebrate());
console.log(user1.birthDayDate);

const user2 = new Employee("Mike", "Brown", 35, "1993-10-10", "driver");
console.log(user2.birthDayDate);
console.log(user2.celebrate());











