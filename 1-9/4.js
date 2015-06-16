// Largest palindrome product
// Largest palindrome product such that ABBA = n * m, n and m are 3-digit numbers
var maxProduct = 0;
function isPalindrome(n) {
	var characters = n.toString().split('');
	for(var i = 0; i < Math.floor(characters.length / 2); i++) {
		var curChar = characters[i],
			flipChar = characters[characters.length - (i + 1)];
		if(curChar !== flipChar) { return false; }
	}
	return true;
}
var product;
for(var i = 100; i < 1000; i++) {
	for(var j = 100; j < 1000; j++) {
		product = i * j;
		if(isPalindrome(product) && maxProduct < product) {
			maxProduct = product;
		}
	}
}
console.log(maxProduct);