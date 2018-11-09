
class Student{
	fullName:string;
	constructor(public fistName,public middleInitial,public lastName){
		this.fullName = fistName +' ' + middleInitial + ' ' + lastName;
	}
}

interface Person{
	fistName:string;
	lastName:string;
}

function greeter(person:Person){
	return "Hello," + person.fistName + "" +person.lastName;
	
}

var user = new Student("Jane","M.","user");
console.log(greeter(user));
//document.body.innerHTML = greeter(user);
