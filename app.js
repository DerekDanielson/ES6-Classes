class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x,y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Smith', '09-12-1980');

mary.getsMarried('Bobson');

console.log(mary);

console.log(Person.addNumbers(3,2));