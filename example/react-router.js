var exec = require("child_process").exec;
exec("node index.js react-router", function(err, stdout, stderr) {
  console.log(stdout);
});
