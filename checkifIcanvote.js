// Variables

var myAge = prompt("How old are you?");
var votingAge = 18;
var yearsTowait = votingAge - myAge;

// Check if old enogh to vote or not

if ( myAge >= 18 ) {
	console.log("I am happy to tell you that you are allowed to vote");
	if ( myAge >= 21 ) {
		console.log("So it seems like you are even old enough to be elected as president")
	}
}
else {
	console.log("I am sorry you are not old enough to vote"); 
	console.log("Actually you have to wait " + yearsTowait + " years until you are allowed to vote!");
}