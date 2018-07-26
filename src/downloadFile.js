const request = require("request");
const fs = require("fs");
const path = require("path");
const shttps = require("socks5-https-client");

const targetDir = path.join(__dirname, "../resource/love/");

module.exports = async url => {
  const dstPath = path.join(targetDir, url.split("/").pop());
  shttps.get(url, function(res) {
    res.pipe(fs.createWriteStream(dstPath));
  });
};
