const libName = process.argv[2];
const lib = require(libName);

const names = [libName];
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

resolveObject(lib);

const result = Array.from(new Set(names));
const resultMap = {};
for (res in result) {
  resultMap[result[res]] = "";
}

console.log(resultMap);
