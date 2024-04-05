function sumArray(array) {
  // const sum=array.reduce((acumulador,value, index, array)=>acumulador+value, 0)
  const sum = array.reduce(
    (acumulador, value, index, array) => acumulador + value
  );
  console.log(`🚀 ~ sumArray ~ array:`, sum);
  return sum;
}

module.exports = sumArray;
