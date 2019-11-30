var exec = require("child_process").exec;
exec("node index.js react", function(err, stdout, stderr) {
  console.log(stdout);
});
