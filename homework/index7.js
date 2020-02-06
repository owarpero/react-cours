let largestN = (array, n) => {
  array.sort((a, b) => {
    return a - b;
  });
  return array.reverse()[n - 1];
};

console.log(largestN([2, 4, 1, 5, 3], 1)); // 5
console.log(largestN([2, 4, 1, 5, 3], 2)); // 4
console.log(largestN([1, 8, 3, 2], 4)); // 1
