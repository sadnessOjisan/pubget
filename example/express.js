var exec = require("child_process").exec;
exec("node index.js express", function(err, stdout, stderr) {
  console.log(stdout);
});
