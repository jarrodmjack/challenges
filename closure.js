
const myFilter = (array1, array2) => {
    return array1.filter((element) => array2.includes(element));
}

const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

const intersection = (arrays) => {
  return reduce(arrays, myFilter, arrays[0]); 
}

const inputArrays = [[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]];
const result = intersection(inputArrays);
// // console.log(result); // Output: [5, 15]