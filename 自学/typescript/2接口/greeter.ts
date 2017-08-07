

interface Person{
	fistName:string,
	lastName:string
}

function greeter(person:Person){
	return "Hello," + person.fistName + "" +person.lastName;
	
}

var user = {
	fistName:"Jane",
	lastName:"user"
};
console.log(greeter(user));
//document.body.innerHTML = greeter(user);
