//variables for interactive elements//
var age = document.getElementById('age');
var maxAge = document.getElementById('max-age');
var item = document.getElementById('item');
var numberPerDay = document.getElementById('num-per-day');
var	solution = document.getElementById('solution');
var drink = document.getElementById('drink');
var clickMe = document.getElementById('click-me');

//variables for chunks of data
var myAge;
var myMaxAge;
var mySolution; 
var myDrink;
var myNumberPerDay;

//set up trigger
clickMe.onclick = function(){
	myAge = age.value;
	myMaxAge = maxAge.value;
	myDrink = item.value;
	myNumberPerDay = numberPerDay.value;
	mySolution = (myMaxAge - myAge) * 365 * myNumberPerDay;
	console.log(mySolution);
	solution.innerHTML = mySolution;
	drink.innerHTML = myDrink;
	clickMe.innerHTML = "done!";
	console.log(myDrink);
}
