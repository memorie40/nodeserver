var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "/home/memorie/CS360/Lab7/";

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  console.log(urlObj);
  fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
    console.log("Response sent.");
  });
}).listen(8080);
                  
