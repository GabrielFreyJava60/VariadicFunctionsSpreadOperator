function isNumber(value) {
    return Number.isFinite(value);
  }
  
  function processNumber(num, min, max) {
    if (isNumber(num)) {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
    return [min, max];
  }
  
  function processArray(arr, min, max) {
    for (let j = 0; j < arr.length; j++) {
      const num = arr[j];
      [min, max] = processNumber(num, min, max);
    }
    return [min, max];
  }
  
  function minMax(...values) {
    let min = Infinity;
    let max = -Infinity;
  
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
  
      if (Array.isArray(value)) {
        [min, max] = processArray(value, min, max);
      } else {
        [min, max] = processNumber(value, min, max);
      }
    }
  
    if (min === Infinity && max === -Infinity) {
      return [];
    }
  
    return [min, max];
  }
  
console.log(`minMax(1, 2, 3) = [${minMax(1, 2, 3)}]`);
console.log(`minMax(1, 2, 3, [100, 50]) = [${minMax(1, 2, 3, [100, 50])}]`);
console.log(`minMax(1, 2, 3, [100, 50], [-2, 40, 200]) = [${minMax(1, 2, 3, [100, 50], [-2, 40, 200])}]`);
console.log(`minMax([5, [10, -1]], 20, [-5, -10]) = [${minMax([5, [10, -1]], 20, [-5, -10])}]`);
console.log(`minMax() = [${minMax()}]`);
console.log(`minMax([1, 2, 'a'], [3, 4]) = [${minMax([1, 2, 'a'], [3, 4])}]`);
console.log(`minMax([ ]) = [${minMax([ ])}]`);
console.log(`minMax([ ],[ ]) = [${minMax([ ],[ ])}]`);
console.log(`minMax(-1, -2, -3) = [${minMax(-1, -2, -3)}]`);