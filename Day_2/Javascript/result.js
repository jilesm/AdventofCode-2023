//Part 1
// const input = require("fs").readFileSync("data.txt").toString().split(/\r\n/);

// let maximums = {
//   blue: 14,
//   green: 13,
//   red: 12,
// };

// let games = input.map((gameStr) => {
//   let splitByColon = gameStr.split(":");
//   let gameName = splitByColon[0];
//   let rounds = splitByColon[1].split(";");

//   let gameInfo = {
//     name: gameName,
//     blue: 0,
//     green: 0,
//     red: 0,
//   };
//   for (let i = 0; i < rounds.length; i++) {
//     let str = rounds[i];
//     let strippedStr = str.replaceAll(",", "");
//     let currentRound = strippedStr.split(" ");
//     for (let j = 0; j < currentRound.length; j++) {
//       currentWord = currentRound[j];
//       if (j > 0) {
//         let count = parseInt(currentRound[j - 1]);
//         switch (currentWord) {
//           case "blue":
//             if (count > gameInfo.blue) gameInfo.blue = count;
//             break;
//           case "green":
//             if (count > gameInfo.green) gameInfo.green = count;
//             break;
//           case "red":
//             if (count > gameInfo.red) gameInfo.red = count;
//             break;
//         }
//       }
//     }
//   }
//   return gameInfo;
// });

// let solutionArr = [];
// for (let i = 0; i < games.length; i++) {
//   let currentGame = games[i];
//   if (
//     currentGame.blue <= maximums.blue &&
//     currentGame.green <= maximums.green &&
//     currentGame.red <= maximums.red
//   ) {
//     solutionArr.push(parseInt(currentGame.name.split(" ")[1]));
//   } else {
//   }
// }

// console.log(solutionArr.reduce(sum, 0));

// function sum(acc, a) {
//   return acc + a;
// }

// Part 2

const fs = require("fs").readFile("data.txt", "utf-8", (err, data) => {
  const input = data
    .split("\n")
    .filter((n) => n)
    .map((row) => {
      let [, tries] = row.split(":");

      tries = tries
        .split(";")
        .map((x) => x.trim())
        .map((x) =>
          x.split(",").reduce((acc, x) => {
            const [n, c] = x.trim().split(" ");
            acc[c] = Number(n);

            return acc;
          }, {})
        );
      return tries;
    })
    .map((tries) => {
      return tries.reduce((acc, tri) => {
        Object.keys(tri).forEach((c) => {
          acc[c] = Math.max(acc[c] || 0, tri[c]);
        });

        return acc;
      });
    })
    .reduce(
      (acc, row) =>
        (acc += Object.values(row).reduce((mul, item) => mul * item, 1)),

      0
    );

  console.log(input);
});

// const input = require("fs").readFileSync("data.txt").toString().split("/\r\n/");

// console.log(`Part 1: ${part1()}`);
// // console.log(`Part 1: ${part1()}`);

// // Part 1

// function part1() {
//   let total = 0;
//   for (let game of input) {
//     //Split between Game ID and game data value Game 1: 3 blue
//     let [gameId, gameData] = game.split(": ");
//     let gameSet = gameData.split("; ");
//     let valid = true;

//     for (let gameId of gameSet) {
//       let cubeCounts = {
//         red: 12,
//         green: 13,
//         blue: 14,
//       };

//       for (let cube of gameId.split(", ")) {
//         //Split by space ex: 3 blue
//         let [count, color] = cube.split(" ");
//         cubeCounts[color] -= count;

//         for (let key of Object.keys(cubeCounts)) {
//           if (cubeCounts[key] < 0) {
//             valid = false;
//             break;
//           }
//         }
//       }
//     }
//     if (valid) {
//       total += parseInt(gameId.split(" ")[1]);
//     }
//   }

//   return total;
// }

// function part2() {}
