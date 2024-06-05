const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = process.env.PORT || 3000;



const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.setHeader('Access-Control-Allow-Origin' , `*`)
  if(req.url === '/') {
    fs.readFile('./public/index.html',(err,data)=>{
      if(err){
        throw err;
      }
      res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
      res.end(data);
    });
  } else if (req.url==='/script.js') {
    fs.readFile('./public/script.js',(err,data)=>{
      if(err){
        throw err;
      }
      res.writeHead(200,{"Content-Type":"application/javascript;charset=UTF-8"});
      res.end(data);
    });
  } 
});

server.listen(PORT,(err)=>{
  if(err){
    console.error('에러 발생 : ', err);
  } else {
    console.log("서버 가동중!");
    console.log(`http://localhost:${PORT}`);
  }
})