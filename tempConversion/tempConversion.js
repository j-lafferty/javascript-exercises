var ftoc = function(fDegree) {
  return Math.round(((fDegree - 32) * 0.5556) * 10) / 10;
};

var ctof = function(cDegree) {
  return Math.round(((cDegree * 1.8) + 32) * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
}
