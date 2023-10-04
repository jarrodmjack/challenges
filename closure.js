
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




// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.


function checkIfHasMatching(val1, val2) {
  if (val1.toUpperCase() === val2) {
    return true
  } else {
    return false
  }
}

function objOfMatches(array1, array2, callback) {
  const obj = {}

  for(let i = 0; i < array1.length; i++) {
    let doesMatch = callback(array1[i], array2[i])
    if (doesMatch) {
      obj[array1[i]] = array2[i]
    }
  }
  return obj
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], checkIfHasMatching));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }