const events=require('events');

const myemitter= new events.EventEmitter();

myemitter.addListener('my',()=>{
	console.log('hello');
});
setTimeout(()=>{
myemitter.emit('my');
},2000);