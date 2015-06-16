// Largest prime factor
// Largest prime factor of 600851475143
var number = 600851475143,
	divisor = 2;
function isPrime(n) {
	if (n <= 3) { return n > 1; }
    if (n % 2 === 0 || n % 3 === 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) { return false; }
    }
    return true;
}
while(true) {
	if(number % divisor === 0) {
		if(isPrime(number / divisor)) { break; }
	}
	divisor += 1;
}
console.log(number / divisor);