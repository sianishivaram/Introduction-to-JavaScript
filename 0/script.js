"use strict";

//Print the name based on the input throw alerts
function writeHello(name){
	if(!name)
		alert("Must pass name");

	else if( name.length < 3) 
	{
		alert("Not your initias- I need your name.");

	if( name.length ==1 ) 
		alert("You are so lazy");
	}

	else 
		{
			alert("Thanks!");
			console.log('Hello, '+ name + "!");
		}

//print 0 - 4
for(var i = 0; i< 5; i ++)
	console.log(i);
}

//Check if a number is divisible by 2 i.e., if it is even
function Even( )
{
	for( var i = 1; i < 10000; i ++)
		{
			if( i % 2 == 0) 
				console.log(i);
		}
}

//Check is a number is divisible by 3
function arrayThree( )
{
	var arr = [];
	for( var i = 1; i < 10000; i ++)
		{
			if( i % 3 == 0) 
				arr.push(i);

		}
		console.log(arr);
}

//Check the maximum number of a given array
function maxNo(array)
{
	var max = array[0];

	for(var i = 1 ; i <= array.length; i++)
	{
		if( array[i] > max)
			max = array[i];
	}

	console.log(max);
}

//Check if a number is either divisible by 7 or is odd
function is_odd_or_div_by_7(number)
{
	return(number % 7 == 0 || number % 2 != 0)
}


/*given a list of food orders eg ["burger", "fries","burger", "tenders","apple pie"]
Write a function 'get_aggregate_order_counts' that takes a list and returns a dictionary
with the different dishes as keys and the number of times they appear in the list as the values. 
ex: ["burger", "fries","burger", "tenders","apple pie"]

{

	"burger" : 2,
	"fries": 1,
	"Tenders":1,
	"apple pie:",1
}*/
//var list = ["burger", "fries", "tenders"];

function get_aggregate_order_counts(list)
{

var tally = {};

for( var i = 0 ; i < list.length; i++)
{
	if( list[i] in tally)
	//if(tally[list[i]])
		tally[list[i]] += 1;
	else
		tally[list[i]] = 1;

}
console.log(tally);

}

//Loop over an array in the dicitonary 

function compileInterests( peopleArray)
{
	var interests = {};

	for( var i= 0; i < peopleArray.length; i++)
	{
		var personInterests = peopleArray[i].interests;
	}	
		for( var j= 0; j < personInterests.length; j++)
		{
			interests.push(personInterests[j]);
		}
		console.log(personInterests);
	
		console.log(interests);
}
//}

