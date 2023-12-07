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

const input = require("fs").readFileSync(data.txt).toString().split(/\r\n/);

function part1() {
  let cubeCounts = {
    red: 12,
    green: 13,
    blue: 14,
  };
}
