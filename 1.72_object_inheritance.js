var friend={

	//Properties
	fullname		: "",
	age				: 0,
	married			: true,
	vocation		: "",
	closeLikeABro	: true,
	yearsKnown		: 0,

	//Method
	printVocation	: function(){
		return this.vocation;
	},
	goCamping	: function(){
		if(this.yearsKnown >= 5 && this.closeLikeABro == true && this.married==false){
			return "Fishing trip!."
		}else{
			return "Looooser"
		}
	}
}

var stephenMcCune = Object.create(friend);
stephenMcCune.fullname = "Stephen McCune";
stephenMcCune.age = 23;
stephenMcCune.married = false;
stephenMcCune.vocation = "Student at Purdue University";
stephenMcCune.yearsKnown = 15;

var kevinGrabert = Object.create(friend);
kevinGrabert.fullname = "Kevin Grabert"; 
kevinGrabert.age = 21;
kevinGrabert.married = false;
kevinGrabert.vocation = "Skateboarding";
kevinGrabert.yearsKnown = 9;

var benShurina = Object.create(friend);
benShurina.fullname = "Ben Shurina";
benShurina.age = 23;
benShurina.married = false;
benShurina.vocation = "Mad Scientist";
benShurina.yearsKnown = 15; 

var macleanMurt = Object.create(friend);
macleanMurt.fullname = "Maclean Murt";
macleanMurt.age = 22;
macleanMurt.married = false;
macleanMurt.vocation = "N/A";
macleanMurt.yearsKnown = 7;

var daltonTishner = Object.create(friend);
daltonTishner.fullname = "Dalton Tishner";
daltonTishner.age = 19;
daltonTishner.married = false;
daltonTishner.vocation = "Construction";
daltonTishner.yearsKnown = 7;

var johnLawless = Object.create(friend);
johnLawless.fullname = "Johnny Lawless";
johnLawless.age = "18";
johnLawless.married = "false";
johnLawless.vocation = "Airman 1st Class in USAF"
johnLawless.yearsKnown = "15"