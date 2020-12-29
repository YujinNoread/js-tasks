/*-------------------------------------------------------*/
console.log("First task");
const chars = [
  { name: "tony", age: 20 },
  { name: "feel", age: 30 },
];
function pluck(array, prop) {
  let result = [];
  array.forEach((element) => {
    result.push(element[prop]);
  });
  return result;
}

console.log(pluck(chars, "name")); // ['tony', 'feel']
/*-------------------------------------------------------*/
console.log("Second task");
const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = aCopy(arr1);

function aCopy(array) {
  return array.slice();
}

arr1.push([5, 6]);

console.log(arr1); // [[1,2], [3,4], [5,6]]
console.log(arr2); // [[1,2], [3,4]]

/*-------------------------------------------------------*/

const ar1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];
const ar2 = aCopy(ar1);

ar1.unshift(["z"]);

console.log(ar1); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(ar2); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]

/*-------------------------------------------------------*/
console.log("Third task");
const arr = splitArray(["a", "b", "c", "d", "e", "f"], 2);

function splitArray(array, chunk) {
  let result = [];
  for (let i = 0, j = array.length; i < j; i += chunk) {
    result.push(array.slice(i, i + chunk));
  }
  return result;
}

console.log(arr); // [['a', 'b'], ['c', 'd'], ['e', 'f']]

/*-------------------------------------------------------*/
console.log("Four task");
const value4 = clearArray([1, 0, 2, false, "", 3]);

function clearArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == false) {
      array.splice(i, 1);
    }
  }
  return array;
}

console.log(value4); // [1, 2, 3]
/*-------------------------------------------------------*/
console.log("Five task");
const value5 = [1];
const concatValue5 = concatArray(value5, 2, [3], [[4]]);

function concatArray(array, param1, param2, param3) {
  return array.slice().concat(param1, param2, param3);
}

console.log(concatValue5); // [1, 2, 3, [4]]
console.log(value5); // [1]

/*-------------------------------------------------------*/
console.log("Six task");

function rm(array, count = 1) {
  if (array.length < count) {
    return [];
  } else {
    return array.splice(count);
  }
}

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]

/*-------------------------------------------------------*/
console.log("Seven task");

function rl(array, count = 1) {
  if (array.length < count) {
    return [];
  } else {
    array.splice(array.length - count, count);
    return array;
  }
}

console.log(rl([1, 2, 3])); // [1, 2]

console.log(rl([1, 2, 3], 2)); // [1]

console.log(rl([1, 2, 3], 5)); // []

console.log(rl([1, 2, 3], 0)); // [1, 2, 3]

/*-------------------------------------------------------*/
console.log("Eight task");

const value8 = [1, 2, 3];

function replaceIn(array, change, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
    array[i] = change;
  }
  return array;
}

replaceIn(value8, "a");
console.log(value8); // ['a', 'a', 'a']

replaceIn(value8, 2);
console.log(value8); // [2, 2, 2]

const altValue8 = [4, 6, 8, 10];
replaceIn(altValue8, "*", 1, 3);
console.log(altValue8); // [4, '*', '*', 10]

/*-------------------------------------------------------*/
console.log("Nine task");

function init(array) {
  array.pop();
  return array;
}

const value9 = [1, 2, 3, 4];
const rValue9 = init(value9);

console.log(rValue9); // [1,2,3]

/*-------------------------------------------------------*/
console.log("Ten task");

function uni(array) {
	let result=[];
	for (let i = 0; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
		  if(array[i] == array[j]) result.push(array[i])
		}
	 }
	 return result
}

const value10 = [1, 2, 3, 4, 2, 5, 6, 1, 3];
const rValue10 = uni(value10);

console.log(rValue10); // [1,2,3]

/*-------------------------------------------------------*/
console.log("Eleven task");

const value11 = ['a', 'b', 'c', 'd'];

function nfa (array, index) {
	if(index>0){
		return  array[index-1]
	} else {
		let res=array.reverse()
		return res[(index*-1)-1]
	}
	
}

console.log(nfa(value11, 1)); // 'a'
console.log(nfa(value11, -2)); // 'c';

/*-------------------------------------------------------*/
console.log("Twelve task");

console.log([1, 4, 3, 0, 4, 5, 4].reduce((sum, current) => (current%2==0) ? sum + Math.sqrt(current):sum,0))  // 6

/*-------------------------------------------------------*/
console.log("Thirteen task");