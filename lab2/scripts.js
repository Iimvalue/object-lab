const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

console.log(
  "<<<<<<<< 1. Get the first name of a character whose mass is more than 75. >>>>>>>>"
);

let namesWithMassMoreThan75 = characters.find(function (value) {
  return value.mass > 75;
});

console.log(namesWithMassMoreThan75.name);

console.log(
  "<<<<<<<< 2. Get the first eye color of a character shorter than 180. >>>>>>>>"
);
let firstEyeCharShorterThan180 = characters.find(function (value) {
  return value.height < 180;
});

console.log(firstEyeCharShorterThan180.eye_color);

console.log(
  "<<<<<<<< 3. Get characters whose height is greater than 150 but less than 210. >>>>>>>>"
);
let charHeightGreaterThan150_lessThan210 = characters.filter(function (value) {
  return value.height > 150 && value.height < 210;
});

console.log(charHeightGreaterThan150_lessThan210);

console.log("<<<<<<<< 4. Get all female characters. >>>>>>>>");
let femaleChar = characters.filter(function (value) {
  return value.gender == "female";
});

console.log(femaleChar);

console.log("<<<<<<<< 5. Get an array of all eye colors only?????? >>>>>>>>");
let allEyesColorsArray = characters.map(function (value) {
  return value.eye_color;
});

console.log(allEyesColorsArray);

console.log("<<<<<<<< 6. Get an array of all masses only.??????? >>>>>>>>");
let allMassesArray = characters.map(function (value) {
  return value.mass;
});

console.log(allMassesArray);

console.log("<<<<<<<< 7. Sort by name alphabetically (A to Z). >>>>>>>>");
let sortByNameAlphabetically = characters.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log(sortByNameAlphabetically);

console.log("<<<<<<<< 8. Sort by height (low to high). >>>>>>>>");
let sortByHeightLowToHigh = characters.sort(function (a, b) {
  return a.height - b.height
});
console.log(sortByHeightLowToHigh);


console.log(
  "<<<<<<<< 9. Does every character have a height greater than 100? >>>>>>>>"
);

let isEveryCharHaveHeightGreaterThan100 = characters.every(function (value) {
  return value.height > 100;
});

console.log(isEveryCharHaveHeightGreaterThan100);

console.log("<<<<<<<< 10. Is every character lighter than 200? >>>>>>>>");
let isEveryCharLighterThan200 = characters.every(function (value) {
  return value.mass < 200;
});

console.log(isEveryCharLighterThan200);

console.log(
  "<<<<<<<< 11. Is there at least one character with black eyes? >>>>>>>>"
);
let isThereOneBlackEyes = characters.some(function (value) {
  return value.eye_color == "black";
});

console.log(isThereOneBlackEyes);

console.log(
  "<<<<<<<< 12. Is there at least one character with a height of exactly 177? >>>>>>>>"
);

let isThereOneHeightExactly177 = characters.some(function (value) {
  return value.height == 177;
});

console.log(isThereOneHeightExactly177);
