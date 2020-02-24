module.exports = function reverse (n) {
  n += '';
  let rev = '';
  for (let i = 1; i <= n.length; i++) {
    rev += n[n.length - i];
  }
  return +rev;
}
