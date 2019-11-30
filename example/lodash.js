var exec = require("child_process").exec;
exec("node index.js lodash", function(err, stdout, stderr) {
  console.log(stdout);
});
