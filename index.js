const readline = require("readline");
function scanline (msg = ""){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(function(result) {
    rl.question(msg ?? "", (text) => {
      result(text);
      return rl.close();
    });
  });
};

module.exports = scanline;