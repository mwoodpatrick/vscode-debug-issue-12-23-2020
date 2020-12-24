const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
  console.log('continuing ${name}');
});

let i = 0;

console.log("starting program")

setInterval(()=> {
    console.log(`itteration ${i}`);
    i++;
}, 1000)