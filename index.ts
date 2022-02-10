export {};

// bad
// const multiA = (a: number, b: number) => {
//   a + b;
// };

// bad
// const multiB = (a: number, b: number): number => {
//   a + b;
// };

// good
const multiC = (a: number, b: number): number => {
  return a + b;
};

// distruction
const videoGamePlayer = {
  date: new Date(),
  exp: 20,
  name: "Abderrahman",
};

const dataPlayer = (videoGamePlayer: {
  date: Date;
  exp: number;
  name: string;
}): void => {
  console.log(videoGamePlayer.date);
  console.log(videoGamePlayer.exp);
  console.log(videoGamePlayer.name);
};
dataPlayer(videoGamePlayer);
