let max = (price, money) => {
  let count = 0;
  price.sort((a, b) => {
    return a - b;
  });
  let sum = 0;
  for (let index = 0; index < price.length; index++) {
    if (sum < money && sum + price[index] <= money) {
      sum += price[index];
      count += 1;
    }
  }
  return count;
};
console.log(max([1, 2, 10, 1], 2));
