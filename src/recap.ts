const myName = 'Yetsimar';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const yetsimar = new Persona(15, 'Yetsimar');
yetsimar.getSummary();
