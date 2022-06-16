const analyzeArray = (array) => {
  const average = array.reduce((prev, cur) => prev + cur) / array.length;
  const min = array.sort((a, b) => a - b)[0];
  const max = array.sort((a, b) => b - a)[0];
  const length = array.length;

  return { average, min, max, length };
}

module.exports = analyzeArray;