const fs = require('fs');
const path = require('path');




//Create Folder
/* fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created...');
}); */
// Create and write to file
/*  fs.writeFile(path.join(__dirname, '/test', 'hello.text'), 'Hello World!', err => {
    if (err) throw err;
    console.log('File written to...');

    //File Append 
 fs.appendFile(path.join(__dirname, '/test', 'hello.text'), 'I love node js', err => {
    if (err) throw err;
    console.log('File written to...');
});
}); */

/* //Read File
fs.readFile(path.join(__dirname, '/test', 'hello.text'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
 */
//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.text'), path.join(__dirname, '/test', 'helloworld.text'), err => {
    if (err) throw err;
    console.log('File Renamed...');
});


 



