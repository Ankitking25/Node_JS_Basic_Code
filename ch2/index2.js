//module warpper 
//            
// (function (exports,require,module,__dirname){

// })

//requre('path') some method:

const path = require('path');
console.log(path.basename(__filename));

//Also write as: direct:

console.log(__dirname);
console.log(module);
console.log();
console.log(require('path').basename('D:\FreeLanser\Nodejs\ch2\index2.js'));   //a
console.log(require('path').basename(__filename));                              //b    both a and b give same output as file last name:
console.log(require('path').basename(__filename,'.js'));    //give file name with extension:


//dirname->Give directory name
console.log(require('path').dirname(__filename));  

//extname->Give extension path
console.log(require('path').extname(__filename));   

//Join:Help to make a path:
console.log(require('path').join('/search','label','course/path','oop'));

console.log(require('path').join('\search','label','folder','second','python\index','..'));   //It give one level up path same as dirctory in cd:

console.log(require('path').join('search','first','/path/index/index2','..','..'));    //This give two level up path as give two time(..):


console.log(require('path').join(__dirname,'code','alcode.js'));    //You can also use like that join:



//normalize method:
console.log(require('path').normalize('c:\\temp\\\\foo//bar'));

console.log(require('path').normalize('c:\\temp\\foo//bar\\..\\'));


//win32 property of window specific implementation of path method:
console.log(require('path').win32.normalize('c:\\temp\\foo//bar\\..\\'));


//parse : Give the object:
console.log(require('path').parse(__filename));   //give root ,dir,base,ext,name everything of the path:


console.log(require('path').parse(__filename).name);      // .name give specify file name:
   

console.log(require('path').parse(__filename).root);     //root give specity drive name like \\D: , Use also use ext,dir,base,root,name:


//isAbsolute():
console.log(require('path').isAbsolute('//server'));
console.log(require('path').isAbsolute('\\\\server'));
console.log(require('path').isAbsolute('c:/foo/..'));
console.log(require('path').isAbsolute('c:\\foo\\..'));
console.log(require('path').isAbsolute('bar\\bar'));
console.log(require('path').isAbsolute('.'));
console.log(require('path').isAbsolute('//server\\falsy\\..\\..//..'));  //  '..' for up level not applycable in this::Only check path make true or false:
