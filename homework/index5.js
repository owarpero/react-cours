const matrix = [
  ["F", "A", "C", "E"],
  ["O", "B", "O", "P"],
  ["N", "A", "R", "B"],
  ["E", "A", "N", "D"]
];

let check = (matrixArr, string) => {
  let flag = false;

  for (let y = 0, letter = 0, counter = 0; y < matrixArr.length; y++) {
    if (flag) break;

    for (let x = 0; x < matrixArr[y].length; x++) {
      if (matrixArr[y].length - x < string.length && !counter) {
        flag = false;
        break;
      }
      if (matrixArr[y][x] === string[letter]) {
        counter++;
        letter++;
        if (counter === string.length) {
          flag = true;
          break;
        }
        continue;
      }
      counter = 0;
      letter = 0;
    }
    if (flag) break;
    for (let x = 0; x < matrixArr[y].length; x++) {
      if (matrixArr[x][y] === string[letter]) {
        counter++;
        letter++;
        if (counter === string.length) {
          flag = true;
          break;
        }
        continue;
      }
      counter = 0;
      letter = 0;
    }
  }

  return flag;
};

console.log(check(matrix, "FACE")); // true
console.log(check(matrix, "FONE")); // true
console.log(check(matrix, "AND")); // true
console.log(check(matrix, "FONT")); // false
