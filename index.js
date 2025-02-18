function minMax(...values) {
    let min = Infinity;
    let max = -Infinity;
  
    for (const value of values) {
      if (Array.isArray(value)) {
        for (const num of value) {
          if (typeof num === 'number' && !isNaN(num)) {
            min = Math.min(min, num);
            max = Math.max(max, num);
          }
        }
      } else if (typeof value === 'number' && !isNaN(value)) {
        min = Math.min(min, value);
        max = Math.max(max, value);
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