const qSort = (arr, leftInd = 0, rightInd = arr.length-1) => {
  let i = leftInd;
  let j = rightInd;
  
  if (arr.length <= 1) {
    return arr;
  }

  let pivotInd = Math.round((leftInd + rightInd)/2);
  let pivotValue = arr[pivotInd];

  while (i <= j) {
    while (arr[i] < pivotValue)
    i++;
    while (arr[j] > pivotValue)
    j--;

    if (i <= j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  if (leftInd < j) {
    qSort(arr, leftInd, j);
  }
  if (i <rightInd) {
    qSort(arr, i, rightInd);
  }
  return arr;
}