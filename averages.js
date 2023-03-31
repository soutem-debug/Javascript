

const numbers = [5, 6, 10, 7, 5, 6, 8, 10, 7, 6, 12, 6];

// Mean 
function getMean(arr) {
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  const mean = total / arr.length;
  return mean;
}

console.log(getMean(numbers)); 

// Mode 
function getMode(arr) {
  const frequency = {};
  let maxFreq = 0;
  let modes = [];

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      modes = [num];
    } else if (frequency[num] === maxFreq) {
      modes.push(num);
    }
  }
  
  if (modes.length === Object.keys(frequency).length) {
    modes = [];
  }

  return modes;
}

console.log(getMode(numbers)); 

// Function to calculate the median 
function getMedian(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

console.log(getMedian(numbers));

