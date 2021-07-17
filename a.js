const fs = require("fs");

const file = fs.createReadStream("bitset.js");
const output = fs.createWriteStream("newBitset.js");

const pipe = function () {};

/**
 *
 * @param {fs.WriteStream} dest
 */
file.newPipe = function (dest) {
  this.on("data", (chunk) => {
    const result = dest.write(chunk);
    console.log(chunk, result);

    if (!result) {
      console.log("pause");
      this.pause();
    }
  });

  this.on("end", () => {
    console.log("end");
    dest.end();
  });

  dest.on("drain", () => {
    this.resume();
  });
};

file.newPipe(output);
