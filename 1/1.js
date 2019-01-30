var readline = require("readline");
var fs = require("fs");
const http = require("http");
const querystring = require("querystring");
const app = http.createServer();

var fReadName = "./1.txt";
var fWriteName = "./1.json";
var fRead = fs.createReadStream(fReadName);
var fWrite = fs.createWriteStream(fWriteName);

var enableWriteIndex = true;
fRead.on("end", () => {
  console.log("end");
  enableWriteIndex = false;
});

var objReadline = readline.createInterface({
  input: fRead,
  terminal: true
});

var index = 1;
var obj = {};
var name = "";

objReadline.on("line", line => {
  var arr = line.split("   ");
  if (arr.length > 1) {
    name = arr[0];

    if (!obj[name]) {
      obj[name] = { time: [], message: [] };
    }
    var time = arr[2];
    obj[name].time.push(
      time
        .trim()
        .substring(0, 19)
        .replace(/-/g, "/")
    );
  } else {
    var message = arr[0];
    obj[name].message.push(message.trim());
  }

  if (enableWriteIndex) {
    index++;
  }
});
objReadline.on("close", () => {
  fWrite.write(JSON.stringify(obj));
  app.on("request", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(JSON.stringify(obj));
    res.end(JSON.stringify(obj));
  });
  console.log("readline close...");
});
app.listen(3000, () => {
  console.log("已经连接上了3000");
});
