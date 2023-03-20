// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// fib(n) = fib(n-1) + fib(n-2) for n>2

//ITERATIVE
//Time: O(n)
//Space: O(1)
const iterativeFib = (n) => {
	if (n === 2 || n === 1) {
    return false;
  }

  let lastTwo = [0, 1],
    counter = 3;

  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];

		if (nextFib === n) { 
			return true;
		} else if (nextFib > n){
			return false;
		}

    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

	return false;
};
