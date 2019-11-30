var exec = require("child_process").exec;
exec("node index.js now", function(err, stdout, stderr) {
  console.log(stdout);
});
