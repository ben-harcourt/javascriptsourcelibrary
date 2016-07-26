var menuItem="";
var ingredients; 

switch(ingredients){
	case "Taco Salad":
		ingredients= "Seasoned beef over lettuce. Topped with chips, cheese, sour cream and salsa of choice";
		break;
	case "Steak Fajitas":
		ingredients= "Shredded steak, rice, pinto beans, onions and peppers inside of a flour tortilla,";
		break;
	case "Shrimp Tacos":
		ingredients= "Grilled cajun seasoned shrimp with shredded lettuce, cheese and salsa of choice inside of a hard shell";
		break;
}
console.log(ingredients);

//this is an example of a switch that could be used at a Mexican Restraunt
var x="";
var y;

switch(y){
	case /*x*/"____":
		var y="_____";
		break;
	case /*x*/"____":
		var y="_____";
		break;
	case /*x*/"____":
		var y="_____";
		break;
	case /*x*/"____":
		var y="_____";
		break;
}
console.log(y);

//this is a switch with a random function that I made with Joey
var Horror = ["The Birds", "Psycho","The Shining"];
var Comedy = ["Zoolander", "Hear No Evil, See No Evil", "Blazin' Saddles"];
var Action = ["Shooter", "Saving Private Ryan", "The Boondock Saints"];
var rand2;
var randMov;
var lastMovie;



$(function(){
	$("#random").click(function(){

		do{
			var rand1 = Math.floor((Math.random() * 3));
		} while(rand1 === lastMovie);
		
		console.log(rand1);
		switch(rand1)
		{
			case 0:		
			rand2 = Math.floor((Math.random() * 3));
			randMov=Horror[rand2];
			break;

			case 1:
			rand2 = Math.floor((Math.random() * 3));
			randMov=Comedy[rand2];
			break;

			case 2:
			rand2 = Math.floor((Math.random() * 3));
			randMov=Action[rand2];
			break;

		}
		lastMovie = rand1;
		$("#movie").val(randMov);
	});
});