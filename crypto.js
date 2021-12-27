const crypto=require('crypto');



//const hash = crypto.createHash('md5','elavarasan').update('hello world').digest('hex');

//console.log(hash);

var mykey=crypto.createCipher('aes-128-cbc','mypassword');
var mystr=mykey.update('Elavarasan','utf8','hex');

mystr+=mykey.final('hex');

console.log(mystr);

var mykey=crypto.createDecipher('aes-128-cbc','mypassword');
var mystr=mykey.update('34feb914c099df25794bf9ccb85bea72','hex','utf8');
 
mystr+=mykey.final('utf8');

console.log(mystr);
