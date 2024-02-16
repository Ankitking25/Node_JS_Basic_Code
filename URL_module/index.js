import * as fs from 'url'; //not required:

//some method of url:

const myurl = new URL('https://www.fiverr.com:8080/divishha/create-shopify-dropshipping-store-shopify-website?context_referrer=subcategory_listing&source=vertical-buckets&ref_ctx_id=bf5e741fdbe94de4a4fed4c920f57824&pckg_id=1&pos=22&context_type=rating&funnel=bf5e741fdbe94de4a4fed4c920f57824&seller_online=true&imp_id=37ddb741-f252-4e07-a30f-e11c9fcbea90#last');  

console.log(myurl.hash);  //show after hash:

console.log(myurl.host);  //show hostname with port name also:
console.log(myurl.hostname);  //only show host name:

console.log(myurl.pathname);   //Give the path of the page:
console.log(myurl.protocol);    //give prototal https:
console.log(myurl.port);       //give port number:8080:
console.log(myurl.search);     //after ? to #:

