function minMax(...values) {
    let min = Infinity;
    let max = -Infinity;
    let i = 0;

    while (i < values.length) {
        const value = values[i];

        if (Array.isArray(value)) {
            let j = 0;
            while (j < value.length) {
                const num = value[j];
                if (typeof num === 'number') {
                    min = Math.min(min, num);
                    max = Math.max(max, num);
                }
                j++;
            }
        } else if (typeof value === 'number') {
            min = Math.min(min, value);
            max = Math.max(max, value);
        }

        i++;
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