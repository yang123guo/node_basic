const EventEmitter = require('events');
let emitter = new EventEmitter();
emitter.on('myEvent', () => {
  console.log('hi 1');
});
emitter.on('myEvent', () => {
  console.log('hi 2');
});

// hi1 hi2 都会执行
emitter.emit('myEvent');