import http from "http";

const hotname = '127.0.0.1';
const PORT =    3000;

const server = http.createServer((req,res)=>{
   res.statusCode = 200;
   res.setHeader('Content-type','text/plain');
   res.end('Hello World');
});

server.listen(PORT,hotname,()=>{
  console.log(`Server is running on port http://${hotname}:${PORT}`);

});

