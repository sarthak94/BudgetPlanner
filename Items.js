 


var SixDollarItems = ["Thai Bowl","Mexican burrito","Greek Bowl"];
var OneDollarItems = ["abc","def","fsdf","sfsd","fsfdsfsd","fsdfsd","fsdf","eyteryr","fsfgetetet","f"];

 var itemGenerator = function(price){
 	var randomItem = Math.floor((Math.random() * 10) + 1);
 	if(price === 1){
 		console.log(OneDollarItems[randomItem]);
 		return 
 	}
 	if(price === 6){
 		console.log(SixDollarItems[0]);
 	}
 };

 itemGenerator(1);
 itemGenerator(6);