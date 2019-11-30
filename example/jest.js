var exec = require("child_process").exec;
exec("node index.js jest", function(err, stdout, stderr) {
  console.log(stdout);
});
