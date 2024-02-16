import * as fs from 'fs/promises';


//readdir -> read all folder that was present after that path:
// try{
//    const folder = await fs.readdir('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI');
//    for(var i=0;i<folder.length;i++){
//     console.log(folder[i]);
//    }
// }
// catch(error){
//      console.log(error);
// }


//Use of remove directory : Directory should be empty honi chayia then only method work:
try{
    await fs.rmdir('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI_2\\demo\\test\\last');   //remove the folder name as last:
    console.log("Directory get remove");
}
catch(error){
    console.log(error);
}