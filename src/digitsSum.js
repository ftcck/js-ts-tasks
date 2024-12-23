/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n);
  let sum = 0;
  while (true) {
    if (n >= 10 || n <= -10) {
      sum += n % 10;
      n = Math.floor(n / 10);
    } else {
      sum += n;
      return sum;
    }
  }
};
