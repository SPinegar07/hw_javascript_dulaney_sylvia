//#4
var iceCream = [
	"The Tonight Dough",
	"Americone Dream",
	"Peanut Butter World",
	];

iceCream.push("Hazed and Confused");
//#5
var presidents =[
	{firstName:"Barack", lastName:"Obama", termLength:"8 years", party:"Democrat", yearsofPresidency:"7"},
	{firstName:"George W.", lastName:"Bush", termLength:"8 years", party:"Republican", yearsofPresidency:"8"},
	{firstName:"Bill", lastName:"Clinton", termLength:"8 years", party:"Democrat", yearsofPresidency:"8"},
	{firstName:"George H. W.", lastName:"Bush", termLength:"4 years", party:"Republican", yearsofPresidency:"4"},
	{firstName:"Ronald", lastName:"Reagan", termLength:"8 years", party:"Republican", yearsofPresidency:"8"},
	]
function printPres () {
	console.log( presidents[2].lastName.firstName );
	}
//#6a
function howdy ( person, message )
	return person + ' says ' + message;
}
var message = howdy( 'Sylvia Pinegar', 'Hey there!');
console.log( message );
//#6b
function numba ( string ) {
if ( string < 7 ) {
	console.log('What a short little word!');
} else if ( string > 7 )	{
	console.log('I’m sorry, but that’s too many to count');
} else if ( string == 7 )	{
	console.log('7, what a perfect choice!');
}
function passMessage ( message ) {
	console.log ( message )
}
passMessage ( "7");
passMessage ( "seventy");
passMessage ( "university"); 
//#6c
function inception ( callback, value ) {
	callback( value );
}
inception ('Step Brothers') {
	console.log( callback + 'is a fantastic movie')
}


