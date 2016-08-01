var person={};

var bank={
	funds:0,
	receiveDepositsFrom:function(person){
		this.funds+=person.funds;
		person.funds=0;
	}
};

console.log(person.funds); //underfined

(function work(person){
	var end=Date.now()+4000;//add 4 seconds
	while(Date.now()<end){}
		person.funds=100;
})(person);

// person.funds=(function work(){
// 	return 100;
// })();//IFFE

// console.log(person.funds); //100

// bank.receiveDepositsFrom(person);

// console.log(person.funds); //0