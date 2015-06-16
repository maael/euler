// Even Fibonacci numbers
// Sum of even fibonacci numbers less than 4 million
var fibSeq = [1 ,2];
function fib(a, b) {
	return a + b;
}
do {
	fibSeq.push(fib(fibSeq[fibSeq.length - 1], fibSeq[fibSeq.length - 2]));
} while(fibSeq[fibSeq.length - 1] < 4000000);
var evenSum = fibSeq.filter(function(a) { return (a % 2 === 0); }).reduce(function(previous, current) {
	return previous + current;
});
console.log(evenSum);