const fibNum = (n) => {
  if (n <= 2) {
    return 1;
  }
return fibNum(n-1) + fibNum(n-2);
}

const fibSequence = (n) => {
	let result = [];
  let i = 1;
  while (i <= n) {
    let currentFib = fibNum(i);
    result.push(currentFib);
    i++;
  }
  return result;
}