function greeter(person) {
    return "Hello," + person.fistName + "" + person.lastName;
}
var user = {
    fistName: "Jane",
    lastName: "user"
};
console.log(greeter(user));
//document.body.innerHTML = greeter(user);
