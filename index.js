//import { fizzBuzz } from "./fizzbuzz-problem";
const fizzBuzz = require("./fizzbuzz-problem");

console.time("fizzBuzz");
fizzBuzz(15);
console.timeEnd("fizzBuzz");
