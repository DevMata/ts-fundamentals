const myNumber = 10;

const myString = 'TS';

const myBoolean = false;

// symbol
const mySymbol = Symbol('Antonio');

let myAny: any;

let myUnknown: unknown;
function myUnknownFn(arg: unknown) {
  if (typeof arg === 'string') {
    arg.toLowerCase();
  }
  if (typeof arg === 'number') {
    arg.toExponential();
  }
}

function sum(a: number, b: number) {
  return a + b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function getLength(str: string) {
  return str.length;
}

function toLower(str: string) {
  return str.toLowerCase();
}

function getBooleanString(bool: boolean) {
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
