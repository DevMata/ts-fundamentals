const myNumber = 1;

const myString = 'TS';

const myBoolean = false;

// symbol
const mySymbol = Symbol('Antonio');

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function getLength(str) {
  return str.length;
}

function toLower(str) {
  return str.toLowerCase();
}

function getBooleanString(bool) {
  if (bool) {
    return 'True';
  }
  return 'False';
}

function primitives() {
  console.log('sum', sum(myNumber, 10));
  console.log('multiply', multiply(myNumber, 10));
  console.log('length', getLength(myString));
  console.log('to lower', toLower(myString));
  console.log('boolean string', getBooleanString(myBoolean));
  console.log('symbol', mySymbol);
}

primitives();
