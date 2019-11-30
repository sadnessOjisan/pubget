var exec = require("child_process").exec;
exec("node index.js vue", function(err, stdout, stderr) {
  console.log(stdout);
});
