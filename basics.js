/* Create a `myName` variable and assign it a String value */
var myName = 'owly';
/* Create a `person` variable, asign an object and give it 2 properties,
 * `name`, assign it the same name as before,
 *  as well as an `age` (number);
 */
var person = {name:myName,age:2};

 /* Create a variable called `canDrive`, and asign it a boolean
 * it should be true if your person object is at least 16 years old
 */
var canDrive;

if (person.age > 16) {
	canDrive = false;
} else {
	canDrive = true;
}

canDrive = (person.age > 16) ? true : false;
/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
function greet(name){
		console.log("Hello, my name is " + name);
}
/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
var dataTypes = ['hi',4,true,{name:'HOOTHOOT'},null,undefined]
/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
var dog = {
		name:'Spot',
		bark:function(){
			console.log('bark')
		},
}
