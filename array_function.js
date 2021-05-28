function checkYuGiOh(n) {
  var arr = Array.from({ length: n }, (_, i) => i + 1);
  // var arr = Array.from(Array(n + 1).keys()).slice(1);
  if (typeof parseInt(n) === "number") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        arr[i] =
          "yu" +
          (arr[i] % 3 == 0 ? "-gi" : "") +
          (arr[i] % 5 == 0 ? "-oh" : "");
      } else if (arr[i] % 3 == 0) {
        arr[i] = "gi" + (arr[i] % 5 == 0 ? "-oh" : "");
      } else if (arr[i] % 5 == 0) {
        arr[i] = "oh";
      }
    }
    return arr;
  } else {
    return `invalid parameter: "${n}"`;
  }
}

console.log(checkYuGiOh(20));
