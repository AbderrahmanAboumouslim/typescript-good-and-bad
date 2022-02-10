"use strict";
exports.__esModule = true;
// bad
// const multiA = (a: number, b: number) => {
//   a + b;
// };
// bad
// const multiB = (a: number, b: number): number => {
//   a + b;
// };
// good
var multiC = function (a, b) {
    return a + b;
};
// distruction
var videoGamePlayer = {
    date: new Date(),
    exp: 20,
    name: "Abderrahman"
};
var dataPlayer = function (videoGamePlayer) {
    console.log(videoGamePlayer.date);
    console.log(videoGamePlayer.exp);
    console.log(videoGamePlayer.name);
};
