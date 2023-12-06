const input = require("fs").readFileSync("data.txt").toString();
// .split(/\r?\n/);
// console.log(input);

// Part 1

function part1() {
  // let  ansList = []
  let total = 0;

  // for (let i = 0; i < input.length; i++) {
  //   const numbers = num.split("").filter((el) => !isNaN(parseInt(el)));
  //   total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
  // }
  for (let num of input.split("\n")) {
    const numbers = num.split("").filter((el) => !isNaN(parseInt(el)));
    total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
  }
  console.log(total);
}

part1();

function part2() {
  let total = 0;

  const numberMappings = {
    one: "one1one",
    two: "two2two",
    three: "three3three",
    four: "four4four",
    five: "five5five",
    six: "six6six",
    seven: "seven7seven",
    eight: "eight8eight",
    nine: "nine9nine",
  };

  for (let line of input.split("\n")) {
    for (let num of Object.keys(numberMappings)) {
      line = line.replaceAll(num, numberMappings[num]);
    }

    const numbers = line.split("").filter((el) => !isNaN(parseInt(el)));
    total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
  }

  console.log(total);
}

part2();
