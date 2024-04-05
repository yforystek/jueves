function searchMax(array) {
  const max = Math.max(...array);
  console.log(`🚀 ~ searchMax ~ max:`, max);
}

const numeros = [10, 5, 20, 15];

// module.exports = { searchMax: searchMax, numeros: numeros };
module.exports = { searchMax, numeros };
