var fishersYelpRestraunts = {
	directoryIdByZip	: 46038,
	directoryName		:"Local Yelp Directory",
	directoryDefined	:"This is a directory of restraunts in Fishers",
	directoryRestruants : {
		restrauntInfo		: [
			{restrauntId : 1, name: "Bean Lean", rating: 3, topDish: "Leaning Bean Seam"},
			{restrauntId : 2, name: "Skewer Sewer", rating: 1, topDish: "Opossum Blossum"},
			{restrauntId : 3, name: "Sipable Stew", rating: 4, topDish: "Mean Bean Salad"},
			{restrauntId : 4, name: "Ricky Racoons", rating: 5, topDish: "Trash Can BBQ"},
			{restrauntId : 5, name: "The Corn Horn", rating: 2, topDish: "Classic Cob"}
		]
	}

};
for(var restraunt in fishersYelpRestraunts.directoryRestruants.restrauntInfo){
	console.log(fishersYelpRestraunts.directoryRestruants.restrauntInfo[restraunt].name);
}
//restrauntId, name, rating and topDish are properties
