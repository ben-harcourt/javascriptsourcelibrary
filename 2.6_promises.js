var sleep=function(ms){
	return function(callback){
		setTimeout(callback,ms);
	};
};

var squareWithCallBack=function(num, callback){
	sleep(1000).call(this, function(){
		callback(num*num);
	});
};

squareWithCallBack(10, function(num){
	squareWithCallBack(num, function(num){
		squareWithCallBack(num, function(num){
			squareWithCallBack(num, function(num){
				squareWithCallBack(num, function(num){
					console.log(num);
				});
			});
		});
	});
});

//promises

var square=function(num){
	return new Promise(function(resolve,reject){
		sleep(1000).call(this,function(){
			resolve(num*num);
		});
	});
};

square(10)
.then(square)
.then(square)
.then(square)
.then(square)
.then(function(total){
	console.log(total);
});