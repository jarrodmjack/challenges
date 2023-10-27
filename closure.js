
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



// Challenge 10
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
function multiMap(arrVals, arrCallbacks) {

  let obj = {}

  for(let i = 0; i < arrVals.length; i++) {
    obj[arrVals[i]] = []
    for(let j = 0; j < arrCallbacks.length; j++) {
      obj[arrVals[i]].push(arrCallbacks[j](arrVals[i]))
    }
  }
  return obj
}

console.log(multiMap(
  ['catfood', 'glue', 'beer'],
  [
    function(str) { return str.toUpperCase(); },
    function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); },
    function(str) { return str + str; }
  ]));
/* should log: 
 { 
 catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
 glue: ['GLUE', 'Glue', 'glueglue'], 
 beer: ['BEER', 'Beer', 'beerbeer'] 
 }
 */
