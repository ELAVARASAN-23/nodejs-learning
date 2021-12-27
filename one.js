//localmodule
func =function fun(){
	console.log("function working");
}


num=x=12345;

//module.exports.funfun=fun;
//module.exports.value=x;

module.exports={
	func:func,
	num:num,
	dummy:()=>{console.log("hi");}
}