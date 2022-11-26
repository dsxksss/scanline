const readline = require("readline");
const scanline = (msg = "") => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((result) => {
    rl.question(msg ?? "", (text) => {
      result(text);
      rl.close();
    });
  });
};

module.exports = scanline;
