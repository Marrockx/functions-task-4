function convertFahrToCelsius(F) {
  // isTemperature = true;
  if ((typeof F === "number") | "string") {
    let C = (parseInt(F) - 32) * (5 / 9);
    return C.toFixed(4);
  } else {
    var output = `${F} is not a valid number but a/an ${typeof F}`;
    return output;
  }
}
console.log(convertFahrToCelsius(0));
