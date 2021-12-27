const readline=require('readline');

const rl=readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('what is you name ',(ans)=>{
	console.log('your name is '+ans);
	rl.close();
});