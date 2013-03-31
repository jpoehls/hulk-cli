var spawn = require('child_process').spawn;

// Search for installed hulk by using node's built-in require() logic.
var child = spawn(process.execPath, ['-p', '-e', 'require.resolve("hulk")']);

var hulkpath = '';
child.stdout.on('data', function(data) { hulkpath += data; });

child.on('exit', function(code) {
  // Remove trailing newline from stdout.
  hulkpath = hulkpath.trim();

  //console.log('requiring hulk from: %s', hulkpath);

  // Everything looks good. Require local hulk and run it.
  require(hulkpath).cli();
});