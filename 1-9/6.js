// Sum Square Difference
// Difference between sum of squares and square of sum for the first 100 integers
var squareSum = 0,
	sumSquares = 0;
for(var i = 1; i <= 100; i++) {
	squareSum += i;
	sumSquares += Math.pow(i, 2);
}
squareSum = Math.pow(squareSum, 2);
console.log(Math.abs(squareSum - sumSquares));