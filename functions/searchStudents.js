function searchStudents(array) {
    const students = array
      .filter((student) => student.curso === "Primero")
      .map((student) => student.nombre)
      .sort();
  console.log(`🚀 ~ searchStudents ~ students:`, students);
}

module.exports = searchStudents;
