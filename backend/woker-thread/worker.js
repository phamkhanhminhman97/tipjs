// // worker.js
const { workerData, parentPort } = require('worker_threads');

const jobs = workerData;

let total = 0;

for (let job of jobs) {
  let count = 0;
  for (let i = 0; i < job; i++) {
    count++;
  }
  total += count;
}

parentPort.postMessage(total);
