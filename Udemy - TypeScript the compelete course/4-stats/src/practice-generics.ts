// NOTHING TO DO WITH GENERICS

const addOne = (a: number): number => {
  return a + 1; 
}

const addTwo = (a: number): number => {
  return a + 1; 
}

const addThree = (a: number): number => {
  return a + 1; 
}


// Best solution
const add = (a: number, b: number): number => {
  return a + b;
}

///////////////////////////

class HoldNumber {
  data: number = 0;
}

class HoldString {
  data: string = 'Dummy';
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'Hello'

// Using Generics
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 123;

const holdString2 = new HoldAnything<string>();
holdString2.data = 'Hello Again!'

///////////////////////////