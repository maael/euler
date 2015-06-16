// 10001st prime
function isPrime(n) {
	if (n <= 3) { return n > 1; }
    if (n % 2 === 0 || n % 3 === 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) { return false; }
    }
    return true;
}
var primes = [],
	i = 0;
while(primes.length < 10001) {
	i++;
	if(isPrime(i)) { primes.push(i); }
}
console.log(primes[10000]);