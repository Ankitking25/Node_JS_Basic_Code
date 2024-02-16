import * as fs from 'http';
import * as ff from 'fs';

//create web server-http module: In nodejs we can create your own server:
const server = fs.createServer((req,res)=>{
//    if(req.url=='/'){
//     res.end('<h1>Home page<h1>');
//    }
//    else if(req.url=='/about'){
//     res.end('Home About');
//    }
//    else{
//     res.end('Page not Found');
//    }
       
   if(req.url=='/'){
    ff.readFile('D:\\FreeLanser\\Nodejs\\Routing_and_Serving\\home.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    });
   }
   else if(req.url=='/about'){
    ff.readFile('D:\\FreeLanser\\Nodejs\\Routing_and_Serving\\homeabout.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
   }
   else{
    res.end('Page not Found');
   }
   
});


server.listen(800,'localhost',()=>{
    console.log('Server running at http://localhost:800');
});
