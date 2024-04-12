// Creá una función llamada abbrevName que reciba como parámetro un string (""). Este string tiene que incluir un espacio. La Función deberá convertir el string recibido en iniciales.
function abbrevName(str) {
  // const elements = str.split(" ");
  // // console.log(`🚀 ~ abbrevName ~ elements:`, elements)
  // // const initials = elements[0][0] + "." + elements[1][0];
  // // let initials = "";
  // // // elements.forEach((element) => (initials = initials + element[0]));
  // // elements.forEach((element) => {
  // //   initials += element[0] += ".";
  // // });
  // const initials=elements.map(element=>element[0])
  // // console.log(`🚀 ~ abbrevName ~ initials:`, initials);
  // const joinInitials=initials.join(".")
  // console.log(`🚀 ~ abbrevName ~ joinInitials:`, joinInitials)

  const initials = str
    .toUpperCase()
    .split(" ")
    .map((element) => element[0])
    .join(".");
  console.log(`🚀 ~ abbrevName ~ initials:`, initials);
}

module.exports = abbrevName;
