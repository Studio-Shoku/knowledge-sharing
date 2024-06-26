/**
 *
 * @param {number} n
 * @returns {void}
 * @description Write a program that prints the numbers from 1 to n, where n is provided as input.
 * But for multiples of three, print "Fizz" instead of the number,
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * @example
 * fizzBuzz(15);
 * // Output:
 * // 1
 * // 2
 * // Fizz
 * // 4
 * // Buzz
 * // Fizz
 * // 7
 * // 8
 * // Fizz
 * // Buzz
 * // 11
 * // Fizz
 * // 13
 * // 14
 * // FizzBuzz
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz'
    if (i % 5 === 0) output += 'Buzz'
    else if (!output) output = i;
    console.log(output);
  }
}

module.exports = fizzBuzz;
