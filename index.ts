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

// if are'nt returning we use :void
const dataPlayer = (videoGamePlayer: {
  date: Date;
  exp: number;
  name: string;
}): void => {
  console.log(videoGamePlayer.date);
  console.log(videoGamePlayer.exp);
  console.log(videoGamePlayer.name);
};

const dataPlayerDistructioned = ({
  date,
  exp,
  name,
}: {
  date: Date;
  exp: number;
  name: string;
}): void => {
  console.log(date);
  console.log(exp);
  console.log(name);
};

// OBJECTS
const user = {
  name: "abderrahman",
  rank: "gold",
  level: 75,
  location: {
    x: 230,
    y: 49,
  },
  previousLevel(level: number): number {
    return (this.level = level - 1);
  },
};
// good
const { level, rank }: { level: number; rank: string } = user;

// bad
// const {level} : number = user;

const {
  location: { x, y },
}: { location: { x: number; y: number } } = user;

/////////////////////////////////////////////////////////
////// function + interface + object + distraction//////

interface Profile {
  describe(): string;
}

const developer = {
  name: "Abderrahman",
  useJavaScript: true,
  repos: 40,
  famousLang: "javascript",
  date: new Date(),
  describe(): string {
    return `${this.name} is very addicted to coding and mostly using ${this.famousLang}, and his GitHub has ${this.repos} repositories.`;
  },
};

const gamer = {
  name: "Aboumouslim",
  isPlaying: true,
  level: 599,
  describe(): string {
    return `${this.name} is a good gamer with level of ${this.level}`;
  },
};

const getProfile = (profile: Profile): void => {
  console.log(profile.describe());
};

getProfile(developer);
getProfile(gamer);
