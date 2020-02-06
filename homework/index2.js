let longest = str => {
  let string = "";
  let arrOfStr = [];
  for (let i = 0; i < str.length; i++) {
    if (string.indexOf(str[i]) === -1) {
      string += str.slice(i, i + 1);
    } else {
      arrOfStr.push(string);
      string = "";
      string += str.slice(i, i + 1);
    }
  }
  arrOfStr.push(string);
  string = "";
  for (let index = 0; index < arrOfStr.length; index++) {
    const el = arrOfStr[index];
    if (el.length > string.length) string = el;
  }
  return string;
};
console.log(longest("bbbab"));
