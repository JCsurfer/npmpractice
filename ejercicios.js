/* 
Sum of two numbers
*/
function plus(a, b) {
    return a + b;
}

plus(2, 3);

/*
First value array
*/
function firstArray(array) {
    return array[0];
}

firstArray([30, 20, 10])

/*
Area of a triangle
*/
function triArea(base, height) {
    return (base * height) / 2
}

/*
Maximum Edge of a Triangle
*/
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

/*
Return the Next Number from the Integer Passed
*/
function nextEdge(number) {
    return number + 1;
}

nextEdge(10);

/*
Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
*/
function lessThanOrEqualToZero(num) {
    return (num <= 0) ? true : false
}

lessThanOrEqualToZero(10);

/*
Return the Remainder from Two Numbers
*/
function remainder(x, y) {
    return (x % y);
}

/*
The Farm Problem
*/
function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}

/*
Multiple of 100
*/
function divisible(num) {
    return (num % 100) ? false : true
}

/*
Profitable Gamble
Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
*/
function profitableGamble(prob, prize, pay) {
    return ((prob * prize) > pay) ? true : false
}

/*
Compare Strings by Count of Characters
*/
function comp(str1, str2) {
	return (str1.length == str2.length)
}



/*************
 * Algorithms
 ************/
 /*
 Add up the Numbers from a Single Number
 */

function addUp(num) {
	let total = 0;
	
	for(let i = 0; i<= num; i++) {
		total = total + i;
	}
	
	return total;
}

/*
Matchstick Houses
*/
function matchHouses(step) {
	palos = 6;
	
	return (step) ? (palos * step) - (step - 1) : 0
}

/*
Sort an Array by String Length
*/
function sortByLength(arr) {
	return arr.sort(function(a, b) { return a.length - b.length })
}


/*
Return the Highest and Lowest Numbers
*/
