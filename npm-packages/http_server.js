"use strict"
// sudo npm install -g nodemon ile bu code içinde yaptığım değişikliklerde otomatik olarak dinlmeyi yeniden başlatır. 
// nodemon http_server.js 

const http = require('http');

const server = http.createServer((request,response) => {
    
    console.log(request.url);
    console.log (request.headers);
    response.writeHead(200 , {'content-type' : 'text/html; charset=utf-8'} );
     response.end("<p> hello<b> dünyağğğ <b/> </p>");

     //response.end();
     newFunction();

    })


    
server.listen(8080,()=>{
    console.log("http server çalışıyor");
});

function newFunction() {
    console.log("new request");
}
