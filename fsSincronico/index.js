// const fs = require("node:fs");
// console.log(`🚀 ~ fs:`, fs.readFileSync)

const {
  readFileSync,
  writeFileSync,
  readdirSync,
  appendFileSync,
  mkdirSync,
  unlinkSync,
  statSync,
} = require("node:fs");
// console.log(`🚀 ~ readdirSync:`, readdirSync())

const read = () => {
  try {
    const data = readFileSync("./package.json", "utf-8");
    const dataJson = JSON.parse(data);
    console.log(`🚀 ~ read ~ data:`, dataJson.name);
  } catch (error) {
    console.log(`🚀 ~ read ~ error:`, error);
  }
};

const write = (data) => {
  try {
    writeFileSync("./readme.md", data);
    console.log(`🚀 ~ write ~ data`);
  } catch (error) {
    console.log(`🚀 ~ write ~ error:`, error);
  }
};

const readDir = () => {
  try {
    const dir = readdirSync("./").forEach((e) => console.log(e));
    // console.log(`🚀 ~ readDir ~ dir:`, dir)
  } catch (chayane) {
    console.log(`🚀 ~ readDir ~ error:`, chayane);
  }
};

const append = () => {
  try {
    const appendFile = appendFileSync("./readme.md", `\njueves`);
    console.log(`🚀 ~ append ~ appendFile:`, appendFile);
  } catch (error) {
    console.log(`🚀 ~ append ~ error:`, error);
  }
};
const mkDir = () => {
  try {
    const mk = mkdirSync("./prueba");
    console.log(`🚀 ~ append ~ appendFile:`, mk);
  } catch (error) {
    console.log(`🚀 ~ append ~ error:`, error);
  }
};
const unlink = () => {
  try {
    const unlink = unlinkSync("./readme.md");
    console.log(`🚀 ~ append ~ appendFile:`, unlink);
  } catch (error) {
    console.log(`🚀 ~ append ~ error:`, error);
  }
};
const stat = () => {
  try {
    const stat = statSync("./fsSincronico");
    console.log(`🚀 :`, stat);
  } catch (error) {
    console.log(`🚀 ~ append ~ error:`, error);
  }
};

// read();
// write("QUE ONDAAAAA");
// readDir()
// append()
// mkDir()
// unlink()
// stat()
