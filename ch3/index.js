import path from 'path';
console.log(path.basename('D:\\FreeLanser\\Nodejs\\ch3\\index.js'));



//Two type:
//1)Using .mjs entenstion but it has limit of like __filename , dirname:    
//2)Using type="module" add this in our json. file and use direct:

//remember in both case const path = require('path'); not work: