const fs = require("fs");
const http = require("http");

// Reading and Writing Files

/* const hello = "Hello world!";
console.log(hello); */

//Blocking, synchronous way

/* const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on: ${Date.now()}`;

fs.writeFileSync("./output.txt", textOut);
console.log("File Written!"); */

//Non-Blocking Async Way.

/* fs.readFile("./start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error 💥");
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./final.txt", `${data2}\n${data3}`, "utf-8", (errr) => {});
    });
  });
  //data is what being read from the file.
});
console.log("Will read file!"); */

///////////////////////////////////////////
//SERVER
//createserver expects a callback function which is fired off each time a new req hits our server.
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
}); // Three args, third is optional which is callback function which will be run when the server starts listening
