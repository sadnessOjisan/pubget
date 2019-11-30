var exec = require("child_process").exec;
exec("node index.js styled-components", function(err, stdout, stderr) {
  console.log(stdout);
});
