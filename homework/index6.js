let missed = array => {
  array.sort((a, b) => {
    return a - b;
  });
  for (let i = array[0]; i < array[array.length - 1] + 1; i++) {
    if (array.indexOf(i) === -1) {
      return i;
    }
  }
};
console.log(missed([0, 1, 3]));
console.log(missed([-2, 0, 1, 2]));
console.log(missed([1, 3, 2, -1]));
