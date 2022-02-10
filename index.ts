// bad
const multiA = (a: number, b: number) => {
  a + b;
};

// bad
const multiB = (a: number, b: number): number => {
  a + b;
};

// good
const multiC = (a: number, b: number): number => {
  return a + b;
};
