import * as fs from 'fs/promises';


//writeFile : create a file at given address you also give some input in it directly and some text also:
// try{
//     await fs.writeFile('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\check\\readme.txt','ACCEPT');
//     console.log("Write file successfully");
// }
// catch(error){
//     console.log(error);
// }


//readFile:
// try{
//     const data =  await fs.readFile('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\check\\readme.txt');   //return Buffer:
//     console.log(data);
//     console.log("Reading Successful");
// }
// catch(error){
//     console.log(error);
// }


//readFile acctual file:Not Buffer:

// try{
//     const data =  await fs.readFile('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\check\\readme.txt','utf-8');   //utf-8 helps in encoding buffer data to acctual data format:
//     console.log(data);
//     console.log("ReadFile Successful");
// }
// catch(error){
//     console.log(error);
// }


//append data in the file system:Append data in the writeFile:

// try{
//     const data =  await fs.appendFile('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\check\\readme.txt','This is the last append');   
//     console.log(data);
//     console.log("Append Successful");
// }
// catch(error){
//     console.log(error);
// }

//copyFile method:

// try{
//     await fs.copyFile('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\check\\readme.txt','D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\check\\readme1.txt');  //copy data from readme to readme1:
//     console.log("Filecopy");
// }
// catch(error){
//     console.log(error);
// }


//Get File Information:
try{
    const data = await fs.stat('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_3\\index.js');
    console.log("Is Directory",data.isDirectory());
    console.log("Is file",data.isFile());
    console.log(data);
    console.log("Successfully");
}
catch(error){
    console.log(error);
}
