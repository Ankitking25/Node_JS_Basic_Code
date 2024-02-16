import eventEmitter from 'events';

class myemitter extends eventEmitter{};

//creating object:
const emmiter = new myemitter();

//ex1;
//register even listerner:
emmiter.once('event',()=>{
    console.log('An event occured!');
})

emmiter.emit('event');
emmiter.emit('event');