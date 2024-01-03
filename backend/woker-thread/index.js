// // index.js
// const { Worker } = require('worker_threads');

// const jobs = Array.from({ length: 2 }, () => 1e9);

// function chunkify(array, n) {
//   let chunks = [];
//   for (let i = n; i > 0; i--) {
//     chunks.push(array.slice(0, Math.ceil(array.length / i)));
//   }
//   return chunks;
// }
// function run(jobs, concurrentWorkers) {
//   const chunks = chunkify(jobs, concurrentWorkers);
//   const tick = performance.now();
//   let completedWorkers = 0;

//   chunks.forEach((data, i) => {
//     const worker = new Worker('./worker.js');
//     worker.postMessage(data);
//     worker.on('message', () => {
//       console.log(`Worker ${i} completed`);
//       completedWorkers++;
//       if (completedWorkers === concurrentWorkers) {
//         console.log(`Completed in ${performance.now() - tick}ms`);
//         // process.exit();
//       }
//     })
//   });
// }

// run(jobs, 4)

// index.js
const { Worker } = require('worker_threads');

const jobs = Array.from({ length: 5 }, () => 1e9); // Giảm giá trị để giảm thời gian chạy

const tick = performance.now();

const numWorkers = 6; // Số lượng worker bạn muốn sử dụng
const jobsPerWorker = jobs.length / numWorkers;

const workers = [];
let completedWorkers = 0;
let total = 0;

// Tạo và chạy worker threads
for (let i = 0; i < numWorkers; i++) {
  const start = i * jobsPerWorker;
  const end = i === numWorkers - 1 ? jobs.length : (i + 1) * jobsPerWorker;

  const worker = new Worker('./worker.js', { workerData: jobs.slice(start, end) });
  workers.push(worker);

  // Nhận kết quả từ worker threads
  worker.on('message', (workerTotal) => {
    total += workerTotal;
    completedWorkers++;

    // Nếu tất cả worker đã hoàn thành, in kết quả và thời gian thực hiện
    if (completedWorkers === numWorkers) {
      const tock = performance.now();
      console.log(`Total count: ${total}`);
      console.log(`Total time: ${tock - tick} ms`);
    }
  });
}
