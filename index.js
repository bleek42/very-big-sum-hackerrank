function veryBigSum(ar) {
  if (!Array.isArray(ar)) throw new TypeError('input must be an array!');

  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    if (isNaN(ar[i])) throw new TypeError('an element in the array is NaN!');
    sum += ar[i];
  }
  return sum;
}
const myArr = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(veryBigSum(myArr));