const yargs = require("yargs");
const react = require("react");

const names = [];
const resolveObject = obj => {
  for (key in obj) {
    names.push(key);
    if (key === "constructor") {
    } else {
      const t = typeof obj[key];
      if (t === "function") {
        const v = obj[key].prototype;
        resolveObject(v);
      }
    }
  }
};

resolveObject(yargs);

const result = Array.from(new Set(names));
const resultMap = {};
for (res in result) {
  resultMap[result[res]] = "";
}

console.log(resultMap);
