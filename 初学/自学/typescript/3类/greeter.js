var Student = (function () {
    function Student(fistName, middleInitial, lastName) {
        this.fistName = fistName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = fistName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.fistName + "" + person.lastName;
}
var user = new Student("Jane", "M.", "user");
console.log(greeter(user));
//document.body.innerHTML = greeter(user);
