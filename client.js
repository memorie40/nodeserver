//var fs = require('fs');
var http = require('http');
//var url = require('url');
//var ROOT_DIR = "/home/memorie/CS360/Lab7/";

var options = {
    hostname: 'ec2-52-33-245-25.us-west-2.compute.amazonaws.com',
    port: '8081',
    path: '/Lab6.html'
  };
function handleResponse(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
    console.log(serverData);
  });
}
http.request(options, function(response){
  handleResponse(response);
}).end();
