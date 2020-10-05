const eventEmitter = require('events');

class Emitter extends eventEmitter {}

const emitter = new Emitter();

const countStart = 'count:start';
const countEnd = 'count:end';

emitter.on(countEnd, (...args) => {
  console.log(...args);
});

emitter.on(countStart, (...args) => {
  console.log(...args);
});

const countLimit = 5;
let count = 0;

const interval = setInterval(() => {
  if (count === countLimit) {
    emitter.emit(countEnd, `Count ended with: ${count}`)
    clearInterval(interval);
    return;
  }

  if (count === 0) {
    emitter.emit(countStart, `Count started with: ${count}`);
  }

  count++;
}, 1000);
