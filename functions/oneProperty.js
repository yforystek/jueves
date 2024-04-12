// ## ejercicio 4: Única propiedad
// Declará una función llamada oneProperty que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro.

function oneProperty(array, str) {
  //   const property = [];
  //   for (let i = 0; i < array.length; i++) {
  //     const e = array[i];
  //     const obj = {};
  //     obj[str] = e[str];
  //     //     console.log(`🚀 ~ oneProperty ~ obj:`, obj);
  //     //     console.log(e[str]);
  //     property.push(obj);
  //   }
  //   const property = array.map((element) => {
  //     return { [str]: element[str] };
  //   });
  const property = array.map((element) => ({ [str]: element[str] }));
  console.log(`🚀 ~ oneProperty ~ property:`, property);
}

module.exports = oneProperty;
