/* console.log("Hello World");

const Person = require('./person');

//instantiate person class//

const person1 = new Person('John Doe', 30);

//Called greeting method//
person1.greeting();  */
 
/* const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));


logger.log('Hello World');
logger.log('sdfeag');
logger.log('fegrhg');
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   /*  if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Home</h1>');
        });
       
    }

    if (req.url === '/api/users'){
      const users = [
          {name:'Bob' age: 40},
          {name:'John' age: 30}
      ];
      res.writeHead(200, {'Content-Type': 'application/j' });
      res.end(JSON.stringify(users));
       
    } */

    //Build File Path Dynamic
    let filePath = path.join(
        __dirname, 
        'public' , 
        req.url === '/' ? 'index.html': req.url
    );

    //Extension of File 
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //Check ext and set Content type 
    switch(extname) {
       case '.js':
           contentType = 'text/javascript';
       break;
       case '.css':
            contentType = 'text/css';
        break;
        case '.json':
            contentType = 'application/json';
        break;
        case '.png':
            contentType = 'image/png';
        break;
        case '.jpg':
            contentType = 'image/jpg';
        break;
    }

    //Read File
    fs.readFile(filePath, (err, content)=> {
        if(err){
            if(err.code == 'ENOENT') {
                //Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html' }); 
                    res.end(content, 'utf8');  
                });
            } else{
                //Some Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //Sucess
            res.writeHead(200, {'Content-Type': contentType }); 
            res.end(content, 'utf8');

        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`Server Running on port ${PORT}`));









