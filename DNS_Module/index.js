//DNS module:
import * as ds from 'dns';

//look up method:
// ds.lookup('Alpha.com',(error,address,family)=>{
//     if(error) throw error;
//     console.log(address);
//     console.log(family);
// });


ds.resolve('Alpha.com','NS',(error,records)=>{
    if(error) throw error;
    console.log(records);
});