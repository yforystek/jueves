// const fs = require("node:fs");
// console.log(`🚀 ~ fs:`, fs.readFileSync)

const { readFileSync, writeFileSync } = require("node:fs");

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

read();

write("QUE ONDAAAAA");
