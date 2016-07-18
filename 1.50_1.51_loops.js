//while loops//
//var ben=0//
//have loop add by 3s//
//until 100//
//if number is divisible by 2, display//
//if number is not divisible by 2, display "error"//
var ben=0;
while(ben<100){
	ben+=3
	if(ben%2===0){
		console.log(ben)
	}
}



//for loops//
/*
for(var i=1; i <=50; i+=5){
	console.log(i);
}

for (var i=20;i>1;i--){
	console.log(i);
}
//"i" stands for index/increments

//write a for loop that starts at 3 and increments by 5, doesn't go over 30

for(var i=3;i<30;i+=5){
	console.log(i)
}
*/
//create a for loop that counts to 20 by 2s//
//create a for loop that counts to 100 by 25s. When you get to 50, print "Halfway there!"
//create a for loop that counts to 10. Print each number, 1 through 8, but print 9&10 as "nine" & "ten"

console.log('Loop to 20 by 2s');
for(var i=0;i<=20;i+=2){
	console.log(i);
}
console.log('=====');
console.log('loop to 100 by 25');
for(var i=0;i<=100;i+=25){
	if(i==50)
	{
		console.log("halfway there!");
	}
	else
	{
		console.log(i);
	}
}
console.log('=====');
console.log('loop count to 10');
for(var i=0;i<=10;i++){
	if(i<=8)
	{
		console.log(i);
	}
	else if (i==9)
	{
		console.log("nine");
	}
	else if (i==10)
	{
		console.log("ten");
	}
}