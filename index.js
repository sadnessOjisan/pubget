const yargs = require("yargs");
const react = require("react");

const resolveObject = obj => {
  for (key in obj) {
    const t = typeof obj[key];
    if (t === "function") {
      const v = obj[key];
      console.log(v);
    } else if (t === "object") {
      const v = obj[key];
      resolveObject(v);
    }
  }
};

resolveObject(yargs);
