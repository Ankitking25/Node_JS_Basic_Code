import * as fs from 'fs/promises';

try{
   await fs.mkdir('D:\\FreeLanser\\Nodejs\\File_System\\promiseAPI\\demo\\check1\\check2',{recursive:true});   //recursive:true give the path if it ispresent of not it create all the folder:
   console.log("directory created");
}
catch(error){
     console.log(error);
}


//without recursive:true it must be required to get the path upto you want to make a directory with fs.mkdir();