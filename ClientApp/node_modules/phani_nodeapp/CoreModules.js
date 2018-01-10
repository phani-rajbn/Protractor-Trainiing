/***************Using Fs Module*********************
//This example will consume the std modules of Node. NodeJs has provided certain modules for common activities that is required for the Apps: File IO, OS, create custom web servers to name a few. 
var fs = require('fs');
//fs module contains the APIs for perform IO operations on files. 
//The other version is an async way of reading a file, where after reading the whole file, a call back function could be used to continue with UR program...
//readFileSync takes 2 args: path of the file and the format of reading the file
// var data = fs.readFileSync("firstDemo.js", 'utf-8');
// console.log(data);
//readFile takes 2 args: file path to read and a callback function which has 2 args: err and data. The data is the content of the file after the whole reading is done...
function readData(err, data){
    if(err) throw "Some Error occured";
    console.log("The Contents of the file are: ")
    var data = JSON.parse(data.toString())
    console.log(data);
    console.log("The file reading has ended");
}
//Function is passed as an argument. The function will invoke and moves to the next line of code with out waiting for the function to complete. Once the complete function is done, the Framework will call the 2nd argment functoin... 

fs.readFile('MyData.json',readData);
console.log("Some task is going on....")

//appendFile is a function of the fs to append an existing file with a new Buffer text...
fs.appendFile("MyTestFile.txt", new Buffer("Some Text on the file"));
******************Using http module************************ */
var http = require('http');//for http services
var fs = require('fs');//for file reading activity...

function errorPage(res){
    res.writeHead(404, {'Content-Type':'text/plain'})
    res.write("<h1>This page is not found</h1>");
    res.end();
}

http.createServer(function(req, res){
    if(req.method =="GET" && req.url =="/Home"){
        console.log("Request is made by the client");
        res.writeHead(200, {"Content-type" :"text/html"});
        fs.createReadStream("./HomePage.html").pipe(res);
        res.write("Test123");
        res.write("Appke123")
        //res.end();
    }else{
        errorPage(res);
    }
}).listen(1234);


