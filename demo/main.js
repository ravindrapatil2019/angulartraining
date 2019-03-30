//Addition Subtraction, Division and Multiplication of 2 numbers
var a = 10;
var b = 20;
console.log("Addition of "+a+" and "+b+" is: "+addition(a,b));
function addition(){
	var sum = 0;
	for (var i=0;i<arguments.length;i++){
		sum+= arguments[i];
	} 
	return sum;
}


//Find number is Even or Odd
var num = 2;
console.log(checkNumber(num));
function checkNumber(num){
	if(num%2==0){
		return num+" is Even";
	}
	return num+" is Odd";
	
}

//Making Square and Square root of number
var c = 9;
console.log("Square of "+c+" is "+ squareRoot(c));
function squareRoot(c){	
	return Math.sqrt(c);	
}

var d = 36;
console.log("Square root of "+d+" is "+ squareRoot(d));
function square(d){
	return Math.pow(d, 2);
}

//Making cube of number

var e = 2;
console.log("Cube of Number: "+cube(e));
function cube(e){
	//return e*e*e;
	return Math.pow(e, 3);
}