const fibNum = (n) => {
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

const fibArray = (n) => {
	let result = [];
  let i = 1;
  while (i <= n) {
    let currentFib = fibNum(i);
    i++;
    result.push(currentFib);
  }
  return result;
}