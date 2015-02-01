

var SixDollarItems = ["Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl", "2 Slices of pizza + Regular beverage","2 Slices of Pepperoni + Regular beverage","Spicy chicken sandwich","Grilled chicken wich","Hamburger","Veggie burger","Bowl (1 Side and 1 Entree)","Classic chees quesadillas","Cheese plus 33 quesadillas(Up to 3 ingredients)","Large smoothie"];

var OneDollarItems = ["Cheesy bread sticks", "Milk (Upstate farms)", "Cappucino Mocha (Upstate farms)", "Chocalate milk", "", "", "burger", "", "","one","one","one"];

var TwoDollarItems = ["Chocalate eclair bars"," Strawberry bars", "Vanilla sandwiches","Cinnamon iced breadsticks", "Soda","Kickstart can", "Lipton ice tea","Gadorade","Fountain drink"];

var ThreeDollarItems = ["Cookies and cream sandwiches"," Chocalate chip cookie sandwiches","Strawberry sundae cups","Cookies N' Cream cups","Pizza slice (one topping)","Pizza slice (only cheese)","Greek frozen yogurt","Moose tracks cones (Hersheys)","Incredible cones (Hersheys)","Fries","AMP energy drink", "Rockstar energy drink"];

var FourDollarItems = ["Roletto", "Grilled cheese", "Small smoothie", "Four d", "Four e", "Four f", "Four g", "Four h", "Four i", "Four j"];

var FiveDollarItems = ["Calzone", "Strombolli", "Italian sausage", "Combo Meal (Hot dog, French fries and Fountain drink)", "Regular smoothie", "Five f", "Five g", "Five h", "Five i", "Five j"];

var SevenDollarItems = ["Chicken tender sub","Pesto pita pizza", " Plate( Any side and 2 Entrees)", " Southwest salad", "Spicy Asian salad", "Caesar salad", "seven g", "seven h", "seven i", "seven j"];

var EightDollarItems = ["Salad from the Salad bar", "Grilled chicken pita","Mel burger","eight d","Philly cheese steak ","eight f","eight g","eight h","eight i","eight j"];

var NineDollarItems = ["Plate (Any side and 3 Entrees)"]

 

 var displayList = [];

var numbers = [1,2,3,4,5,6,7,8];
var target = 3;
// console.log(target);
var p = [];
var store = [];



	var sumupR = function (numbers, target, partial) {
		var s = 0;
		var outputList = [];
		for (var i = 0; i<partial.length; i++) { 
		var x = partial[i];
		s = s + x;
		}
		if (s == target) {//if s is equal to target sum 
			
			for (var i = 0; i<partial.length; i++){
				
				var randomItem = Math.floor((Math.random() * 9) + 1);
 				if(partial[i] === 1){
 				outputList.push(OneDollarItems[randomItem]);
 				}
 				if(partial[i] === 2){
 				outputList.push(TwoDollarItems[randomItem]);
 				}
 				if(partial[i] === 3){
 				outputList.push(ThreeDollarItems[randomItem]);
 				}
 				if(partial[i] === 4){
 				outputList.push(FourDollarItems[randomItem]);
 				}
 				if(partial[i] === 5){
 				outputList.push(FiveDollarItems[randomItem]);
 				}
 				if(partial[i] === 6){
 				outputList.push(SixDollarItems[randomItem]);
 				}
 				if(partial[i] === 7){
 				outputList.push(SevenDollarItems[randomItem]);
 				}
 			    if(partial[i] === 8){
 				outputList.push(EightDollarItems[randomItem]);
 				}
			    if(i === partial.length - 1){
			    	displayList.push.apply(displayList, outputList); 
			    	outputList = [];
			    }
			}
	   	   }//print the list of integers in partial
		if (s > target) //if s is greater than target, end
			return;
		for (var i = 0; i < numbers.length; i++) {

			var remaining = [];
			var n = numbers[i];
			for (var j = i + 1; j < numbers.length; j++) {
				remaining.push(numbers[j]);
			}
		var partial_rec = [];
		partial_rec.push.apply(partial_rec, partial); 

			partial_rec.push(n);
			arguments.callee(remaining, target, partial_rec);
		}
	}
		 sumupR(numbers, target, p);


		 	console.log(displayList.toString()+ "\n end");






