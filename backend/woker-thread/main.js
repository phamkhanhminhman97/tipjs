const jobs = Array.from({ length: 5 }, () => 1e9);


const tick = performance.now();

for (let job of jobs) {
  let count = 0;
  for (let i = 0; i < job; i++) {
    count++
  }
}

const tock = performance.now();

console.log(`Main thread speed ${tock - tick} ms`);