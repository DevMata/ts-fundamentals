class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet = () => console.log('any');
}

interface IPerson {
  name: string;
  age: number;
  greet: () => void;
}

const me: IPerson = new Person('Antonio', 27);
console.log('me', me);

const anotherMe: IPerson = { name: 'Antonio', age: 27, greet: () => console.log('Ciao mondo') };
console.log(anotherMe);
anotherMe.greet();
