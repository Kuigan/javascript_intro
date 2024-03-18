const inputString1 = "123";
const inputString2 = "456";

console.log(inputNumber1 + inputNumber2);

// Extrahieren von Zahlen aus Strings
const inputNumber1 = parseInt(inputString1);
const inputNumber2 = parseInt(inputString2);

console.log(inputNumber1 + inputNumber2);

const inputString3 = "1.23";
const inputString4 = "4.56";

console.log(inputString3 + inputString4);

const inputNumber3 = parseInt(inputString3);
const inputNumber4 = parseInt(inputString4);

console.log(inputNumber3);
console.log(inputNumber4);

const number3 = parseFloat(inputString3)
const number4 = parseFloat(inputString4)

console.log(number3);
console.log(number4);

// Ergebnis mit Rundungsfehler
console.log(number3 + number4);

// Ergebnis ohne Rundungsfehler
console.log((number3 + number4).toFixed(2));