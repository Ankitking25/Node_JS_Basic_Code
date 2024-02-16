//Callback function is a asynchronous in nature means:ex->File reading and callback  such as reading a file, making a network request, or performing a database query happend simantentously:
import * as fs from 'fs'; //import of callback:

//Creating Directory - Path should be there:
// fs.mkdir('D:\\FreeLanser\\Nodejs\\File_System\\callback_API_1\\NewProject',(error)=>{
//     if(error) throw error;
//     console.log("Directory Created");
// })


//Creating Directory - Path should not be required there:
// fs.mkdir('D:\\FreeLanser\\Nodejs\\File_System\\callback_API_1\\NewProject\\check\\check1',{recursive:true},(error)=>{
//     if(error) throw error;
//     console.log("Directory Created");
// });


//readdir : in callback:
// fs.readdir('D:\\FreeLanser\\Nodejs\\File_System\\callback_API_1\\NewProject',(error,files)=>{
//     if(error) throw error;
//     for(const x of files){
//         console.log(x);
//     }
// });


//Remove Directory : Directory should be empyt:
// fs.rmdir('D:\\FreeLanser\\Nodejs\\File_System\\callback_API_1\\NewProject\\check\\check1',(error)=>{
//     if(error) throw error;
//     console.log("Directory Removed");
// })


//Create and write files:
// fs.writeFile('D:\\FreeLanser\\Nodejs\\File_System\\callback_API_1\\NewProject\\check\\check1\\index1.txt','Hello checker',(error)=>{
//     if(error) throw error;
//     console.log("Write file Successully");
// })

//ReadFile
// fs.readFile('D:\\FreeLanser\\Nodejs\\File_System\\callback_API_1\\NewProject\\check\\check1\\index1.txt',(error,data)=>{
//     if(error) throw error;
//     for (let i = 0; i < data.length; i++) {
//         const binaryByte = data[i].toString(2).padStart(32, '0'); // Convert byte to binary string
//         console.log(binaryByte + ' '); // Output binary byte
//     }
// })


//appendFile:
// fs.appendFile('path','txt',(error)=>{
//     if(error) throw error;
//     console.log("Data Appended");
// });


//copyFile:
// fs.copyFile('path1','path2',(error)=>{
//     if(error) throw error;
//     console.log("File copied");
// });

//stat : get file information:
// fs.stat('path',(error,data)=>{
// if(error) throw error;
// console.log(data.isDirectory());
// });