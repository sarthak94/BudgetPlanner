



 // function RecPermute(var sofar, var rest) {
	// 	if (rest.equals("")) {
	// 		System.out.println(sofar + "");
	// 	} else {

	// 		for (int i = 0; i < rest.length(); i++) {
	// 			String next = sofar + rest.substring(i, i + 1);
	// 			String rem = rest.substring(0, i) + rest.substring(i + 1);

	// 			RecPermute(next, rem);

	// 		}
	// 	}
	// }

var SixDollarItems = ["Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl"];
var OneDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea"];
var TwoDollarItems = ["Twoa", "Twob", "Twoc", "Twod", "Twoe", "Twof", "Twog", "Twoh", "Twoi", "Twoj"];
var ThreeDollarItems = ["Threea", "Threeb", "Threec", "Threed", "Threee", "Threef"];
var FourDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea"];
var FiveollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea"];
var SixDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea"];
var SevenDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea"];
var EightDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea"];



 var itemGenerator = function(price){
 	var randomItem = Math.floor((Math.random() * 10) + 1);
 	if(price === 1){
 		console.log("first set" + OneDollarItems[randomItem]);
 		 
 	}
 	if(price === 6){
 		console.log("first set " + SixDollarItems[randomItem]);
 	}
 	if(price === 2){
 		console.log("first set " + SixDollarItems[randomItem]);
 	}
 	if(price === 3){
 		console.log("first set " + SixDollarItems[randomItem]);
 	}
 	if(price === 4){
 		console.log("first set " + SixDollarItems[randomItem]);
 	}
 	if(price === 5){
 		console.log("first set " + SixDollarItems[randomItem]);
 	}
 	if(price === 7){
 		console.log("first set " + SevenDollarItems[randomItem]);
 	}
 	if(price === 8){
 		console.log("first set " + EightDollarItems[randomItem]);
 	}
 };

 // itemGenerator(1);
 // itemGenerator(6);

	var sumupR = function (numbers, target, partial) {
		var s = 0;
		for (var i = 0; i<partial.length; i++) { //if x is in partial, add it to s
var x = partial[i];
s = s + x;
		}
		if (s == target) {//if s is equal to target sum
			console.log("sum(" + partial.toString() + ")=" +
							   target); 
			for (var i = 0; i<partial.length; i++){
				itemGenerator(partial[i]);
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
	 


var numbers = [1,2,3,4,5,6,7,8];
var target = 10;
// console.log(target);
var p = [];
	 sumupR(numbers, target, p);




	// function sumup(numbers, target) {
	// 	var list = [];
	// sumupR(numbers, target, list);
	//  }





	// public static void main(String[] args) {
	// 	// RecPermute("", "abcd");

	// 	Integer[] numbers = {1, 3, 2, 4, 5, 6, 7, 8, 9};
	// 	int target = 17;
	// 	sum_up(new ArrayList<Integer>(Arrays.asList(numbers)), target);
	// 	// generate_combinations(1, 2, 3, 4, 5, 6, 7, 8);

	// }






// 	public static void generate_combinations(int a1, int a2, int a3, int a4, int c1,
// 			int c2, int c3, int c4) {
// 		if (a1 + a2 + a3 + a4 == 12)
// 			System.out.println(a1 + " " + a2 + " " + a3 + " " + a4);
// 		else {
// 			if (c1 > 0) {
// 				generate_combinations(a1 + 1, a2, a3, a4, c1 - 1, c2, c3, c4);
// 			}
// 			if (c2 > 0) {
// 				generate_combinations(a1, a2 + 1, a3, a4, c1, c2 - 1, c3, c4);
// 			}
// 			if (c3 > 0) {
// 				generate_combinations(a1, a2, a3 + 1, a4, c1, c2, c3 - 1, c4);
// 			}

// 			if (c4 > 0) {
// 				generate_combinations(a1, a2, a3, a4 + 1, c1, c2, c3, c4 - 1);

// 			}
// 		}
// 		System.out.println("done");

// 	}
// }







// http://codereview.stackexchange.com/questions/56270/list-all-possible-numbers-from-a-given-array-that-sums-up-to-a-given-number
// http://stackoverflow.com/questions/23131039/find-all-combinations-of-n-numbers-of-a-given-set-of-numbers
// http://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
// http://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
// http://codereview.stackexchange.com/questions/56270/list-all-possible-numbers-from-a-given-array-that-sums-up-to-a-given-number

