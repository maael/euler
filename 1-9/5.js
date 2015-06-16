// Smallest multiple
// Smallest number divisible by all numbers from 1 to 20
var number = 1;
function checkDivisble(n) {
	for(var i = 1; i <= 20; i++) {
		if(n % i !== 0) { return false; }
	}
	return true;
} 
while(!checkDivisble(number)) {
	number++;
}
console.log(number);