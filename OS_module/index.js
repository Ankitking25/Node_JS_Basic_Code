//Give the imformation of operation system:
import * as fs from 'os';

// console.log(fs.platform());
// console.log(fs.arch());
// console.log(fs.cpus());
// console.log(fs.hostname());
// console.log(fs.homedir());
// console.log(fs.networkInterfaces());


var x = fs.freemem();
var total = fs.totalmem();
console.log("Rest memory",total-x);