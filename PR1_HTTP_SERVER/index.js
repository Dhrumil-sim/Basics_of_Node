import http from "http";
import { hostname } from "os";
import { URL } from "url";
const hotname = '127.0.0.1';
const PORT =    3000;

const server = http.createServer((req,res)=>{

    const parsedUrl = new URL(req.url, `http://${hostname}:${PORT}`);
    const path = parsedUrl.pathname;
   res.statusCode = 200;
   res.setHeader('Content-type','application/json');
    
   switch(path)
   {
     case '/':
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'Welcome'}));
        break;
     case '/books':
        res.statusCode= 200;
        res.end(JSON.stringify({message: 'List of books'}))
   }
});

server.listen(PORT,hotname,()=>{
  console.log(`Server is running on port http://${hotname}:${PORT}`);

});

