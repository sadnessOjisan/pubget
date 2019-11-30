var exec = require("child_process").exec;
exec("node index.js react-dom", function(err, stdout, stderr) {
  console.log(stdout);
});
