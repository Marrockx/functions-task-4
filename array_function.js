function checkYuGiOh(n) {
  // input = true;
  var arr = Array.from({ length: n }, (_, i) => i + 1);
  // var arr = Array.from(Array(n + 1).keys()).slice(1);
  // if (arr[i] % 2 == 0) {
  //   arr[i] = "yu";
  // } else if (arr[i] % 3 == 0) {
  //   arr[i] = "gi";
  // } else if (arr[i] % 5 == 0) {
  //   arr[i] = "oh";
  // }
  return arr;
}

console.log(checkYuGiOh(8));

//     - for numbers that have multiple factors, use hyphens as separators
//     e.g 10 === "yu-oh", 30 === "yu-gi-oh"
//     - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed.

// Use the following cases as guides:

//     - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
//     - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
//     - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"
